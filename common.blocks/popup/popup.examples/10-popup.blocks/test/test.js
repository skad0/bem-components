modules.define('test', ['i-bem-dom', 'link', 'popup'], function(provide, bemDom, Link, Popup) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findChildBlock(Link),
                    popup = this.findChildBlock(Popup)
                        .setAnchor(link);

                this._events(link).on('click', function() {
                    popup.setMod('visible');
                });
            }
        }
    }
}));

});
