var
	user = mw.user,
	TalkBoard = require( './TalkBoard' ),
	Anchor = require( '../mobile.startup/Anchor' ),
	Overlay = require( '../mobile.startup/Overlay' );

/**
	 * Produce an overlay for talk page
	 * @uses Overlay
	 * @param {Object} options
	 * @param {Api} options.api
	 * @return {Overlay}
	 */
function talkOverlay( options ) {
	var overlay,
		board = new TalkBoard( options );
	overlay = new Overlay( {
		heading: '<strong>' + mw.msg( 'mobile-frontend-talk-overlay-header' ) + '</strong>',
		headerButtonsListClassName: 'header-action',
		headerButtons: [ user.isAnon() ? {} : {
			href: '#/talk/new',
			className: 'add continue',
			msg: mw.msg( 'mobile-frontend-talk-add-overlay-submit' )
		} ],
		footerAnchor: new Anchor( {
			progressive: true,
			href: mw.util.getUrl( options.title ),
			additionalClassNames: 'footer-link talk-fullpage',
			label: mw.msg( 'mobile-frontend-talk-fullpage' )
		} ).options,
		className: 'talk-overlay overlay'
	} );
	overlay.$( '.overlay-content' ).append( board.$el );
	return overlay;
}

module.exports = talkOverlay;
