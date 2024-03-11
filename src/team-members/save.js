
import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';



export default function save({ attributes }) {
	const { columns } = attributes;
	return (
		<div {...useBlockProps.save(
			{
				className: `team-members-wrapper front-wrapper has-${columns}-columns`
			}
		)}>
			<InnerBlocks.Content
			/>

		</div>
	);
}
