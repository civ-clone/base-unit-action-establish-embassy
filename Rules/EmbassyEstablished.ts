import City from '@civ-clone/core-city/City';
import Rule from '@civ-clone/core-rule/Rule';
import Unit from '@civ-clone/core-unit/Unit';

/**
 * Processed when a Diplomat (`Unit`) establishes an embassy with `City`'s owner. `true` when one was established,
 * which uses the Diplomat up.
 */
export class EmbassyEstablished extends Rule<[Unit, City], boolean> {}

export default EmbassyEstablished;
