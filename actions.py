from rasa import Action
from rasa_sdk import Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionGreet(Action):
    def name(self):
        return "action_greet"

    def run(self, dispatcher, tracker, domain):
        dispatcher.utter_message(text="Salom! Yordam bera olishim mumkinmi?")
        return []
