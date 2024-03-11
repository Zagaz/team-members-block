import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Team Member – hello from the saved content!' }
		</p>
	);
}
