"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishEmbassy = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
const EmbassyEstablished_1 = require("./Rules/EmbassyEstablished");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
/** A Diplomat establishes an embassy with `city()`'s owner. What that records is up to the `EmbassyEstablished` rules. The Diplomat is used up when an embassy is established. */
class EstablishEmbassy extends Action_1.default {
    constructor(from, to, unit, city, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        this._city = city;
    }
    city() {
        return this._city;
    }
    // `Action.forUnit` rebuilds an action from `(from, to, unit, ruleRegistry)`, which would put the `RuleRegistry` where
    // the `City` goes.
    // Typed as `Action`: a subclass with a member of its own isn't assignable to it (civ-clone/web-renderer#21).
    forUnit(unit) {
        return new EstablishEmbassy(this.from(), this.to(), unit, this._city, this.ruleRegistry());
    }
    perform() {
        const results = this.ruleRegistry().process(EmbassyEstablished_1.default, this.unit(), this._city);
        if (!results.includes(true)) {
            return;
        }
        this.ruleRegistry().process(Moved_1.default, this.unit(), this);
        this.unit().destroy();
    }
}
exports.EstablishEmbassy = EstablishEmbassy;
exports.default = EstablishEmbassy;
//# sourceMappingURL=EstablishEmbassy.js.map