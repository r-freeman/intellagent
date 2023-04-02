# Multi-Class Text Classification

This is a multi-class text classification machine learning algorithm that was trained on a [customer support dataset](https://blog.bitext.com/free-customer-support-dataset) 
which contained customer utterances and associated problem type categories. It should be able to make reasonably accurate 
predictions on unseen customer utterances and categorise the complaint as one of the following categories.

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

***Run main.py***
````shell script
python main.py
````
