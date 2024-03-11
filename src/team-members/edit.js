import { __ } from '@wordpress/i18n';
import { useBlockProps,
		InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<h1>Testing h1</h1>
			<h6>Testing h6</h6>
			<InnerBlocks
			allowedBlocks ={
			
				['team-member/team-member']
				
			}
			
			/>
		</div>
	);
}
