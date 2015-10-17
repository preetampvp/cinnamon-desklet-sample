
/* to be loaded @ ~/.local/share/cinnamon/desklets */

const Desklet = imports.ui.desklet;
const St = imports.gi.St;


function HelloDesklet(metadata, desklet_id) {
	this._init(metadata, desklet_id)
}

HelloDesklet.prototype = {
	__proto__: Desklet.Desklet.prototype,
	
	_init: function(metadata, desklet_id) {
		Desklet.Desklet.prototype._init.call(this, metadata, desklet_id);
		this.setupUI();
	},

	setupUI: function() {
		this.window = new St.Bin();
		this.text = new St.Label();
		this.text.set_text("hello, world!");

		this.window.add_actor(this.text);
		this.setContent(this.window);
	}

	
}

function main(metadata, desklet_id) {
	return new HelloDesklet(metadata, desklet_id);
}



