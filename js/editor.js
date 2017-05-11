/* ===== Note ===== */

class Note {
	constructor(tag, author) {
		this.tag 			= tag;
		this.content 	= "This is a blank note...";
		this.author 	= author;
	}

	stringify() {
		return JSON.stringify(this);
	}
}

/* ===== Note Manager ===== */

var NoteManager = {

	saveNote: function(note) {
		this.noteCache[note.tag] = note;
		console.log("Saved note: " + note.tag);
		//this.saveCache();
	},
	loadNote: function(tag) {
		//this.loadCache();
		console.log("Loading note: " + tag);
		if(wutils.isValid(this.noteCache[tag]))
			return this.noteCache[tag];
		return new Note(tag, 'BEN')
	},
	saveCache: function() {
		var store = window.localStorage;
		store["note.rs_cache"] = JSON.stringify(this.noteCache);
		console.log("Saving Cache");
	},
	loadCache: function() {
		var store = window.localStorage;
		this.noteCache = JSON.parse(store["note.rs_cache"]);
		console.log("Loaded Cache");
	}
}

NoteManager.noteCache = {};
