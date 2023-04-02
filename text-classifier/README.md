# Multi-Class Text Classifier

This is a multi-class text classifier that was trained on a [customer support dataset](https://blog.bitext.com/free-customer-support-dataset) 
which contained customer utterances and associated categories. It should be able to make reasonably accurate 
predictions on unseen customer utterances and categorise the utterance as one of the following categories.

* FEEDBACK
* ORDER
* CONTACT
* PAYMENT
* CANCELLATION_FEE
* ACCOUNT
* INVOICES
* REFUNDS
* DELIVERY
* NEWSLETTER
* SHIPPING

## Installation

To install the project on your local machine, clone this repository and execute these commands using [git bash](
) in the project directory.

***Create a new python virtual environment***

````shell script
python -m venv venv
````

***Activate the virtual environment***
````shell script
source venv/Scripts/activate
````

***Install the dependencies with pip***
````shell script
pip install -r requirements.txt
````

***Run app.py***
````shell script
python app.py
````

## Usage

This Flask application provides a single REST endpoint for classifying customer utterances into one of the eleven categories 
above. Here is an example request using ``node-fetch``.

### Request

````javascript
try {
    const request = await fetch('http://localhost:5000/classify', {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: {
            utterance: "i need help talking to a human agent" 
        }
    });

    const response = await request.json();
    console.log(response);
} catch (err) {
    console.error(err);
}
````

### Response
````json
{
  "utterance": "i need help talking to a human agent",
  "category": "CONTACT"
}
````