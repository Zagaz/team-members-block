// TEAM MEMBER
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	// ATTRIBUTES
	const { name, bio } = attributes;

	// FUNCTIONS

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};

	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	// RETURN
	return (
		<>
			<div
				{...useBlockProps({
					className: "team-member-card-backend",
				})}
			>
				<RichText
					placeholder={__("Member Name", "team-member")}
					tagName="h4"
					value={name}
					onChange={onChangeName}
					allowedFormats={[]}
					className="team-member-name"
				/>
				<RichText
					placeholder={__("Member Bio", "team-member")}
					tagName="p"
					value={bio}
					onChange={onChangeBio}
					allowedFormats={[]}
					className="team-member-bio"
				/>
			</div>
		</>
	);
}
