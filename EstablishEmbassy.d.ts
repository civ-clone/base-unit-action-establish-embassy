import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import City from '@civ-clone/core-city/City';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
/**
 * A Diplomat establishes an embassy with `city()`'s owner. What that records is up to the `EmbassyEstablished` rules.
 *
 * Before the mission, the Diplomat must survive a caught check (base-unit-agent's `AgentSurvives` with
 * `CAUGHT_CHECK`); one that doesn't is destroyed and nothing is established. Once an embassy is established, it is used
 * up unless it survives an `ORDINARY` check. With no `AgentSurvives` rules, the check passes and it is used up.
 */
export declare class EstablishEmbassy extends Action {
  protected _city: City;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    city: City,
    ruleRegistry?: RuleRegistry
  );
  city(): City;
  forUnit(unit: Unit): Action;
  perform(): void;
}
export default EstablishEmbassy;
