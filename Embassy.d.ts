import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { Turn } from '@civ-clone/core-turn-based-game/Turn';
import Interaction from '@civ-clone/core-diplomacy/Interaction';
import Player from '@civ-clone/core-player/Player';
/**
 * A record that `holder()` has an embassy with `host()`. It's one-way: the host has no embassy with the holder unless
 * it establishes one of its own. `Interaction.players()` has no order, hence the two accessors.
 */
export declare class Embassy extends Interaction {
  private _holder;
  private _host;
  constructor(
    holder: Player,
    host: Player,
    ruleRegistry?: RuleRegistry,
    turn?: Turn
  );
  holder(): Player;
  host(): Player;
}
export default Embassy;
