try:
    import sys
    import os

    sys.path.append(os.environ['PYPATH'])
except ImportError:
    pass

import json
import string
import re
import nltk
from nltk.corpus import stopwords
from joblib import load
from werkzeug.exceptions import BadRequest

stopwords = stopwords.words()


def text_preprocessor(text):
    """
    Convert text to lower case and remove punctuation
    """
    text = "".join([word.lower() for word in text if word not in string.punctuation])
    return text


def tokenize_text(text):
    """
    Break sentences into individual tokens and remove stop words
    """
    tokens = re.split('\W+', text)
    text = [word for word in tokens if word not in stopwords]
    return text


f = '/opt/model_data/logreg.joblib'
classifier = load(f)


def classify(utterance):
    # make a prediction
    pred = classifier.predict([utterance])
    return pred[0]


def handler(event, context):
    if event['httpMethod'] == "POST":
        if "body" in event:
            # parse json string as dict
            body = json.loads(event['body'])
            if "utterance" in body:
                utterance = body['utterance']
                prediction = classify(utterance)

                body = {
                    "utterance": utterance,
                    "category": prediction
                }

                response = {
                    "statusCode": 200,
                    "body": json.dumps(body)
                }

                return response
            else:
                pass
        else:
            pass
    else:
        pass
