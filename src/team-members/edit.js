import { __ } from '@wordpress/i18n';
import { useBlockProps,
		InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
<small>{__('Team Members Block', 'team-member')}</small>
			<InnerBlocks
			allowedBlocks ={
				['team-member/team-member']
			}
			
			/>
		</div>
	);
}
