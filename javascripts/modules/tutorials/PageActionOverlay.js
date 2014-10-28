( function ( M ) {
	var ContentOverlay = M.require( 'modules/tutorials/ContentOverlay' ),
		PageActionOverlay;

	/**
	 * Page overlay prompting a user for given action
	 * @class PageActionOverlay
	 * @extends ContentOverlay
	 */
	PageActionOverlay = ContentOverlay.extend( {
		template: M.template.get( 'modules/tutorials/PageActionOverlay.hogan' ),
		defaults: {
			cancelMsg: mw.msg( 'cancel' )
		}
	} );

	M.define( 'modules/tutorials/PageActionOverlay', PageActionOverlay );

}( mw.mobileFrontend ) );
