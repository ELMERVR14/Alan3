odoo.define('alan_customize.ProductConfiguratorMixin', function (require) {
'use strict';
var sAnimations = require('website.content.snippets.animation');
var core = require('web.core');
var QWeb = core.qweb;
var ajax = require('web.ajax');
var ProductComparision = require('website_sale_comparison.comparison');        
sAnimations.registry.ProductComparison.include({
    init: function () {
        this._super.apply(this, arguments);
        //$('#comparelist')

    },
    start: function () {
    var def = this._super.apply(this, arguments);
    def.then(function () {
    $('.o_product_feature_panel').removeClass('d-none');
    $('.o_product_feature_panel').attr('style','display : block !importent');
    $('.o_product_feature_panel .o_product_panel_content .o_comparelist_button').attr('style','display : block !importent');
    

    })
    }



    });

});
