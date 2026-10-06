"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embassy = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Turn_1 = require("@civ-clone/core-turn-based-game/Turn");
const Interaction_1 = require("@civ-clone/core-diplomacy/Interaction");
/**
 * A record that `holder()` has an embassy with `host()`. It's one-way: the host has no embassy with the holder unless
 * it establishes one of its own. `Interaction.players()` has no order, hence the two accessors.
 */
class Embassy extends Interaction_1.default {
    constructor(holder, host, ruleRegistry = RuleRegistry_1.instance, turn = Turn_1.instance) {
        super(holder, host, ruleRegistry, turn);
        this._holder = holder;
        this._host = host;
        this.addKey('holder', 'host');
    }
    holder() {
        return this._holder;
    }
    host() {
        return this._host;
    }
}
exports.Embassy = Embassy;
exports.default = Embassy;
//# sourceMappingURL=Embassy.js.map