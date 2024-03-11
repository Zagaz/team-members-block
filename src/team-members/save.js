
import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';



export default function save({ attributes }) {
	const { columns } = attributes;
	return (
		<div {...useBlockProps.save()}>

			<div className={`save-wrapper team-members has-${columns}-columns`}>

				<InnerBlocks.Content
				/>

			</div>

		
		</div>
	);
}
