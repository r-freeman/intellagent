import string
import re
import nltk
from joblib import load

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


def main():
    # path to the logistic regression model
    f = 'models/logreg.joblib'

    # use joblib to load the model
    classifier = load(f)

    # make a test prediction
    test_pred = classifier.predict(['check the status'])
    print(test_pred)


if __name__ == "__main__":
    main()
