import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import City from '@civ-clone/core-city/City';
import EmbassyEstablished from './Rules/EmbassyEstablished';
import Moved from '@civ-clone/core-unit/Rules/Moved';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

/** A Diplomat establishes an embassy with `city()`'s owner. What that records is up to the `EmbassyEstablished` rules. The Diplomat is used up when an embassy is established. */
export class EstablishEmbassy extends Action {
  protected _city: City;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    city: City,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this._city = city;
  }

  city(): City {
    return this._city;
  }

  // `Action.forUnit` rebuilds an action from `(from, to, unit, ruleRegistry)`, which would put the `RuleRegistry` where
  // the `City` goes.
  // Typed as `Action`: a subclass with a member of its own isn't assignable to it (civ-clone/web-renderer#21).
  forUnit(unit: Unit): Action {
    return new EstablishEmbassy(
      this.from(),
      this.to(),
      unit,
      this._city,
      this.ruleRegistry()
    ) as unknown as Action;
  }

  perform(): void {
    const results = this.ruleRegistry().process(
      EmbassyEstablished,
      this.unit(),
      this._city
    );

    if (!results.includes(true)) {
      return;
    }

    this.ruleRegistry().process(Moved, this.unit(), this as unknown as Action);

    this.unit().destroy();
  }
}

export default EstablishEmbassy;
