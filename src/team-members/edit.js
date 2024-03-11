import { __ } from '@wordpress/i18n';
// Block Editor
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor'
// Components
import {
	PanelBody,
	RangeControl
} from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;
	const onChangeColumns = (value) => {
		setAttributes({ columns: value });
	}

	return (
		<div {...useBlockProps()}>
			<div
			
					
		
			>
		
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={__('Columns', 'team-member')}
							value={columns}
							onChange={onChangeColumns}
							min={1}
							max={6}
						/>

					</PanelBody>

				</InspectorControls>



				<InnerBlocks
				{...useBlockProps({
					className: `team-members-wrapper back-wrapper has-${columns}-columns`
					
				})}
					allowedBlocks={
						['team-member/team-member']
					}
					template={[
						['team-member/team-member'],
						['team-member/team-member'],
						['team-member/team-member'],

					]}

				/>
			</div>



		</div>
	);
}
