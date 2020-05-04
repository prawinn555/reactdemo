/* meta schema for defining a form */
const SchemaForm = {
	"title": "Let's define a simple form",
    "description": "To create a complex form, use the 'raw JSON editor'",
	"type": "object",
	"properties": {
		"title": {
			"type": "string",
			"default": "Title of your form",
			"title" : "Give your form a title"
		},
		"listFields": {
			"type": "array",
			"title" : "Manage the fields",
			"items": {
				"type" : "object", 
				"required": [
					"fieldName",
					"type"
				], 
				"properties" : {
						"fieldName" : {
							"type": "string",
							"title" : "Techinical field name",
							"pattern": "^[A-Za-z0-9_-]{0,30}$"
						},
						"type" : {
							"enum": ["string","integer", "boolean", "date"],
							"default" : "string",
							"title" : "Data type"
						},
						"title" : {
							"type": "string",
							"title" : "Title to show in the form"
						},
						"required" : {
							"type": "boolean",
							"title" : "Required?"
						}
					
				} 
			}
		} 
	}
};

export default SchemaForm;