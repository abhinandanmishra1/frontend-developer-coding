import './style.css'

import { WalkthroughAssistant } from './walkthroughAssistant'
import { elementsGenerator } from './elementsGenerator'

elementsGenerator()

WalkthroughAssistant(["1", "5"])
