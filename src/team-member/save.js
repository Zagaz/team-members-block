
// TEAM MEMBER
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function save({ attributes }) {
	const { name, bio } = attributes;

	return (
		<>
			<div {...useBlockProps.save(
				{ className: "team-member-card-frontend" }
			)}>
				<RichText.Content tagName="h4" value={name} />
				<RichText.Content tagName="p" value={bio} />
			</div>
		</>
	);
}
