( function ( M ) {
	var Overlay = M.require( 'Overlay' ),
	Icon = M.require( 'Icon' ),
	icon = new Icon( { name: 'cleanup-gray', additionalClassNames: 'issue-notice', hasText: true } ),

	/**
	 * Overlay for displaying page issues
	 * @class CleanupOverlay
	 * @extends Overlay
	 */
	CleanupOverlay = Overlay.extend( {
		templatePartials: {
			content: M.template.get( 'modules/issues/cleanup.hogan' )
		},
		defaults: {
			className: icon.getClassName()
		},
		initialize: function ( options ) {
			options.heading = '<strong>' + options.headingText + '</strong>';
			Overlay.prototype.initialize.call( this, options );
		}
	} );
	M.define( 'modules/issues/CleanupOverlay', CleanupOverlay );
}( mw.mobileFrontend ) );
