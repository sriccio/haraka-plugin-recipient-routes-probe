'use strict'

exports.register = function () {
  this.load_recipient-routes-probe_ini()
}

exports.load_recipient-routes-probe_ini = function () {
  const plugin = this

  plugin.cfg = plugin.config.get('recipient-routes-probe.ini', {
    booleans: [
      '+enabled',               // plugin.cfg.main.enabled=true
      '-disabled',              // plugin.cfg.main.disabled=false
      '+feature_section.yes'    // plugin.cfg.feature_section.yes=true
    ]
  },
  function () {
    plugin.load_example_ini()
  })
}
