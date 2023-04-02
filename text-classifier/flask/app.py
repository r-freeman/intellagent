import string
import re
import nltk
from joblib import load
from flask import Flask, request, jsonify
from werkzeug.exceptions import BadRequest

nltk.download('stopwords')
stopwords = nltk.corpus.stopwords.words('english')


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


def classify(utterance):
    # make a prediction
    pred = classifier.predict([utterance])
    return pred[0]


# path to the logistic regression model
f = 'models/logreg.joblib'

# use joblib to load the model
classifier = load(f)

# initialise the Flask app
app = Flask(__name__)
app.config["DEBUG"] = True
app.config["JSON_SORT_KEYS"] = False


@app.route('/classify', methods=['POST'])
def classify_utterance():
    try:
        body = request.get_json()
        utterance = body['utterance'].strip()
        category = classify(utterance)

        return jsonify({
            "utterance": utterance,
            "category": category
        }), 200

    except BadRequest:
        return jsonify({
            "error": "invalid json object"
        }), 500
    except KeyError:
        return jsonify({
            "error": "utterance is required"
        }), 422
    except TypeError:
        return jsonify({
            "error": "utterance is required"
        }), 422


app.run(host='0.0.0.0', port=5001)
