// node.js built-in modules
const assert = require("assert");

// npm modules
const fixtures = require("haraka-test-fixtures");

// start of tests
//    assert: https://nodejs.org/api/assert.html
//    mocha: http://mochajs.org

beforeEach(function (done) {
    this.plugin = new fixtures.plugin("recipient-routes-probe");
    done(); // if a test hangs, assure you called done()
});

describe("recipient-routes-probe", function () {
    it("loads", function (done) {
        assert.ok(this.plugin);
        done();
    });
});

describe("load-recipient-routes-probe.ini", function () {
    it("loads recipient-routes-probe.ini from config/recipient-routes-probe.ini", function (done) {
        this.plugin.load_config();
        assert.ok(this.plugin.cfg);
        done();
    });

    it("initializes enabled boolean", function (done) {
        this.plugin.load_config();
        assert.equal(this.plugin.cfg.cache.enabled, true, this.plugin.cfg);
        done();
    });
});

describe("uses text fixtures", function () {
    it("sets up a connection", function (done) {
        this.connection = fixtures.connection.createConnection({});
        assert.ok(this.connection.server);
        done();
    });

    it("sets up a transaction", function (done) {
        this.connection = fixtures.connection.createConnection({});
        this.connection.transaction = fixtures.transaction.createTransaction({});
        // console.log(this.connection.transaction)
        assert.ok(this.connection.transaction.header);
        done();
    });
});
