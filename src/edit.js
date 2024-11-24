/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes } ) {

	const today = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
	if (!attributes.start_date) {
		setAttributes({ start_date: today });
	}
	if (!attributes.end_date) setAttributes({ end_date: today });
	if (!attributes.start_time) setAttributes({ start_time: '' });
	if (!attributes.end_time) setAttributes({ end_time: '' });
	if (!attributes.location) setAttributes({ location: '' });

	return (
		<div { ...useBlockProps() }>
			<h4>Event Details</h4>

			<div className='event-detail'>
				<label>Start Date:</label>
				<input
					type="date"
					value={attributes.start_date}
					onChange={(e) => setAttributes({ start_date: e.target.value })}
				/>
			</div>

			<div className='event-detail'>
				<label>End Date:</label>
				<input
					type="date"
					value={attributes.end_date}
					onChange={(e) => setAttributes({ end_date: e.target.value })}
				/>
			</div>

			<div className='event-detail'>
				<label>Start Time:</label>
				<input
					type="time"
					value={attributes.start_time}
					onChange={(e) => setAttributes({ start_time: e.target.value })}
				/>
			</div>

			<div className='event-detail'>
				<label>End Time:</label>
				<input
					type="time"
					value={attributes.end_time}
					onChange={(e) => setAttributes({ end_time: e.target.value })}
				/>
			</div>

			<div className='event-detail'>
				<label>Location:</label>
				<input
					type="text"
					value={attributes.location}
					onChange={(e) => setAttributes({ location: e.target.value })}
				/>
			</div>
		</div>
	);
}
