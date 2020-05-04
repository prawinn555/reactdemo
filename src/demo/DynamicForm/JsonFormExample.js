import React from "react";
import Form from "@rjsf/core";
import myData from './data.js';

export default function JsonFormExample(props) {

	/*
  const [value, setValue] = React.useState(null);

  const handleClick = (event) => {
    setValue('hello');
  }; */



	const schema = {
		title: "My Data",
		type: "object",
		"definitions": {
			"IceCream": {
				"type": "object",
				"title" : "",
				"properties": {
					"kind": { enum : ["chocolate", "vanilla", "strawberry"] },
				}
			},
			"Drink": {
				"type": "object",
				"title" : "",
				"properties": {
					"kind": { enum : ["coffee", "tea", "orange juice"] },
				}
			}
		},

		"properties": {
			"orders" : {
				"type" : "array",
				"items" : {
					"properties" : {
						"product": {
							"type": "string",
							"enum": [
								"IceCream",
								"Drink",
							]
						}
					},
					"dependencies": {
						"product": {
							"oneOf": [
								{
									"properties": {
										"product": {"enum": ["IceCream"]},
										"detail" : {
											"$ref": "#/definitions/IceCream"
										}
									}
								},
								{
									"properties": {
										"product": {"enum": ["Drink"]},
										"detail" : {
											"$ref": "#/definitions/Drink"
										}
									}
								}
							]
						}
					}
				}
			}

		}
	};


  const onSubmit = (data) => {
	  console.log('submit', data);
	  console.log(JSON.stringify(data.formData));
	  
	  //console.log('myData', myData);
  }
  const onError = (data) => console.error('error', data);

  return (
   <div className="px-2" >
  		<Form schema={schema}
			onSubmit={onSubmit}
			onError={onError} 
			formData={myData}
			/>

      </div>
  );
}
