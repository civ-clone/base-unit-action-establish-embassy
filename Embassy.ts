import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import {
  Turn,
  instance as turnInstance,
} from '@civ-clone/core-turn-based-game/Turn';
import Interaction from '@civ-clone/core-diplomacy/Interaction';
import Player from '@civ-clone/core-player/Player';

/**
 * A record that `holder()` has an embassy with `host()`. It's one-way: the host has no embassy with the holder unless
 * it establishes one of its own. `Interaction.players()` has no order, hence the two accessors.
 */
export class Embassy extends Interaction {
  private _holder: Player;
  private _host: Player;

  constructor(
    holder: Player,
    host: Player,
    ruleRegistry: RuleRegistry = ruleRegistryInstance,
    turn: Turn = turnInstance
  ) {
    super(holder, host, ruleRegistry, turn);

    this._holder = holder;
    this._host = host;

    this.addKey('holder', 'host');
  }

  holder(): Player {
    return this._holder;
  }

  host(): Player {
    return this._host;
  }
}

export default Embassy;
