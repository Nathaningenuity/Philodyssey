// Philodyssey — the Compass, as a tour in six chapters. Generated from the chapter designs; edit with care.
window.ATLAS_COMPASS = {
 "sections": [
  {
   "id": "ethics",
   "name": "Ethics",
   "short": "Ethics",
   "blurb": "Trolleys, animals, the duty to help, what makes an act right, and whether morality is objective."
  },
  {
   "id": "mind",
   "name": "Mind and self",
   "short": "Mind",
   "blurb": "Is your mind your brain? Could a machine feel? Is there a self? Free will, teleporters, and whether you deserve blame."
  },
  {
   "id": "reality",
   "name": "Knowledge and reality",
   "short": "Reality",
   "blurb": "Science, numbers, dreams, time, causation, what truth is, and when parts make a whole."
  },
  {
   "id": "society",
   "name": "Society and politics",
   "short": "Society",
   "blurb": "Punishment, what makes a political system good, democracy, free speech, and how institutions should change."
  },
  {
   "id": "god",
   "name": "God and religion",
   "short": "God",
   "minor": true,
   "blurb": "Does God exist? The arguments for and against, the problem of evil, religious experience, and faith versus reason."
  },
  {
   "id": "art",
   "name": "Beauty and art",
   "short": "Art",
   "minor": true,
   "blurb": "Is beauty in the thing or in us? Is anyone’s taste better? What makes something art, can immoral art be good, and can a machine make art?"
  },
  {
   "id": "life",
   "name": "Life and death",
   "short": "Life and death",
   "blurb": "Whether life has meaning, whether death is bad for the one who dies, whether you’d want to live forever, and whether it’s good to be born.",
   "locked": 2
  }
 ],
 "confidence": [
  "Leaning",
  "Fairly sure",
  "Confident",
  "Certain"
 ],
 "questions": [
  {
   "id": "e1",
   "section": "ethics",
   "short": "The lever",
   "intro": "First some cases. Then we’ll ask what’s behind your answers.",
   "text": "A runaway train will kill five people. Pulling a lever sends it onto another track, where it kills one. Should you pull it?",
   "note": "The famous “trolley problem.” Answer what’s right, not what you’d have the nerve to do.",
   "options": [
    {
     "id": "req",
     "lead": "You must pull.",
     "text": "Not pulling would be wrong.",
     "label": "Obligatory"
    },
    {
     "id": "allow",
     "lead": "You may pull, but needn’t.",
     "text": "Pulling is okay, and so is not pulling.",
     "label": "Permissible"
    },
    {
     "id": "wrong",
     "lead": "Don’t pull.",
     "text": "Pulling would be wrong.",
     "label": "Forbidden"
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Nothing makes either choice truly right or wrong.",
     "label": "Moral skepticism"
    }
   ]
  },
  {
   "id": "e1a",
   "section": "ethics",
   "short": "Your own child",
   "when": {
    "q": "e1",
    "in": [
     "req",
     "allow"
    ]
   },
   "text": "Same lever, but the one person on the side track is your own child. Should you still pull?",
   "options": [
    {
     "id": "yes",
     "text": "Five lives are five lives, whoever the one is.",
     "label": "Strict impartiality",
     "lead": "Yes, still pull."
    },
    {
     "id": "may",
     "text": "Pulling would still be best, but you’re allowed not to.",
     "label": "Agent-relative permission",
     "lead": "You may save your child."
    },
    {
     "id": "protect",
     "text": "Saving your child comes first, so pulling would be wrong.",
     "label": "Partiality",
     "lead": "No, protect your child."
    }
   ]
  },
  {
   "id": "e2",
   "section": "ethics",
   "short": "The footbridge",
   "text": "Now the only way to stop the train is to push a stranger off a bridge onto the track. Should you push him?",
   "note": "Same numbers as before: one dies, five live. Only the method has changed.",
   "options": [
    {
     "id": "req",
     "lead": "You must push.",
     "text": "Not pushing would be wrong.",
     "label": "Obligatory"
    },
    {
     "id": "allow",
     "lead": "You may push, but needn’t.",
     "text": "Pushing is okay, and so is not pushing.",
     "label": "Permissible"
    },
    {
     "id": "wrong",
     "lead": "Don’t push.",
     "text": "Pushing would be wrong.",
     "label": "Forbidden"
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Nothing makes either choice truly right or wrong.",
     "label": "Moral skepticism"
    }
   ],
   "when": {
    "not": {
     "q": "e1",
     "in": [
      "wrong"
     ]
    }
   }
  },
  {
   "id": "e2a",
   "section": "ethics",
   "short": "Lever versus push",
   "when": {
    "special": "trolleyDiffer"
   },
   "text": "You judged the lever and the push differently. What makes the difference?",
   "options": [
    {
     "id": "means",
     "text": "His body is what stops the train. On the side track, the one person just happens to be in the way.",
     "label": "Means principle",
     "lead": "He’s used as a tool."
    },
    {
     "id": "redirect",
     "text": "It moves a danger that’s already coming. Pushing drags a new person into it.",
     "label": "Redirection principle",
     "lead": "The lever only redirects."
    },
    {
     "id": "force",
     "text": "Pushing means using physical force directly on him, and that hands-on violence is what makes it worse.",
     "label": "Personal force",
     "lead": "Hands-on force."
    },
    {
     "id": "twolevel",
     "text": "Even if pushing works this once, a rule allowing people to push others would make everyone less safe in real life.",
     "label": "Rule-based reasoning",
     "lead": "A pushing rule backfires."
    }
   ]
  },
  {
   "id": "e3",
   "section": "ethics",
   "short": "Animals",
   "text": "A pig and a human feel exactly the same amount of pain. Does the pig’s pain matter as much?",
   "note": "Bentham asked about animals: “The question is not, Can they reason? nor, Can they talk? but, Can they suffer?”",
   "options": [
    {
     "id": "equal",
     "lead": "Yes, equally.",
     "text": "Pain is pain, whoever feels it.",
     "label": "Equal consideration"
    },
    {
     "id": "less",
     "lead": "It matters, but less.",
     "text": "A pig’s pain counts, just not as much as the same pain in a human.",
     "label": "Hierarchical view"
    },
    {
     "id": "none",
     "lead": "No, or only indirectly.",
     "text": "Animals don’t matter morally in their own right. Cruelty to them is wrong only because it makes us crueler to people.",
     "label": "Indirect duties"
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Nothing makes any answer to this truly right or wrong.",
     "label": "Moral skepticism"
    }
   ]
  },
  {
   "id": "e6",
   "section": "ethics",
   "short": "Duty to help",
   "text": "You can save a stranger’s life by giving money you’d otherwise spend on a holiday. Must you?",
   "note": "Not about whether giving would be nice. The question is whether you’d be doing something wrong if you went on the holiday instead.",
   "hint": "A child is drowning in a shallow pond in front of you. Saving her will ruin your new shoes. Almost everyone says you must wade in. A child dying of a preventable disease far away can be saved for about the same cost. Is that different?",
   "options": [
    {
     "id": "strict",
     "lead": "Yes, and keep giving.",
     "text": "You must go on giving until giving more would mean sacrificing something about as important as the suffering you’d prevent.",
     "note": "Distance doesn’t change your duty.",
     "label": "Strict duty of beneficence"
    },
    {
     "id": "imperfect",
     "text": "You must help some people in need, but how much, when and to whom is up to you.",
     "note": "Kant calls this an “imperfect duty”: you may not ignore everyone in need, but no single act is required.",
     "label": "Imperfect duty",
     "lead": "Some, but you choose."
    },
    {
     "id": "negative",
     "text": "Giving would be good, but nothing requires it. You only owe others not to harm them.",
     "label": "Negative duties only",
     "lead": "No, it’s optional."
    },
    {
     "id": "scalar",
     "lead": "“Must” is the wrong question.",
     "text": "Giving more is better and giving less is worse, but there’s no line where “required” begins.",
     "note": "Morality ranks options from better to worse; it doesn’t sort them into “required” and “optional”.",
     "label": "Scalar view"
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Nothing makes giving or not giving truly right or wrong.",
     "label": "Moral skepticism"
    }
   ]
  },
  {
   "id": "e4",
   "section": "ethics",
   "short": "What makes actions right",
   "text": "What decides whether an action is right?",
   "note": "Look back at your answers so far. What, if anything, made one choice right?",
   "options": [
    {
     "id": "results",
     "text": "What happens because of it: who’s helped and who’s hurt. Nothing else counts.",
     "note": "Philosophers call this consequentialism.",
     "label": "Results",
     "lead": "Only its results."
    },
    {
     "id": "duties",
     "text": "Some things you must or mustn’t do, even when breaking the rule would turn out better.",
     "note": "Philosophers call this deontology, from the Greek word for “duty.”",
     "label": "Duties",
     "lead": "Duties and rules."
    },
    {
     "id": "virtue",
     "text": "What kind of person the act shows you to be. Would a kind, honest, brave person do it?",
     "note": "Philosophers call this virtue ethics.",
     "label": "Virtue ethics",
     "lead": "Your character."
    },
    {
     "id": "care",
     "text": "Whether it does right by the real people in your life, like a parent, a friend or a neighbour, and the care those relationships call for.",
     "note": "Called the ethics of care: ethics starts with the particular people you are bound to.",
     "label": "Relationships and care",
     "lead": "Care for your people."
    },
    {
     "id": "plural",
     "text": "Results, rules and character all count, and none always wins. You weigh them case by case.",
     "label": "Pluralism",
     "lead": "Several things."
    },
    {
     "id": "exist",
     "text": "No rules are handed to you in advance. What counts is what you choose to stand for, and you’re responsible for that choice.",
     "label": "Existentialism",
     "lead": "What you choose.",
     "note": "The existentialist view, as in Sartre and Beauvoir."
    },
    {
     "id": "nothing",
     "text": "No action is really right or wrong.",
     "label": "Moral skepticism",
     "lead": "Nothing."
    }
   ]
  },
  {
   "id": "e4a",
   "section": "ethics",
   "short": "Results for whom",
   "when": {
    "q": "e4",
    "in": [
     "results"
    ]
   },
   "text": "Results for whom? Whose good counts?",
   "options": [
    {
     "id": "everyone",
     "text": "A stranger’s happiness counts exactly as much as yours.",
     "label": "Utilitarianism",
     "lead": "Everyone, equally."
    },
    {
     "id": "prior",
     "text": "Everyone counts, but the worse-off count for more.",
     "note": "Even if two people would gain exactly as much, the gain to the one who is worse off counts for more.",
     "label": "Prioritarianism",
     "lead": "Everyone, worse-off first."
    },
    {
     "id": "close",
     "text": "Everyone matters, but family and friends count extra.",
     "label": "Self-referential altruism",
     "lead": "Everyone, my people more."
    },
    {
     "id": "me",
     "text": "The right act is whatever is best for you in the long run.",
     "note": "Philosophers call this ethical egoism.",
     "label": "Ethical egoism",
     "lead": "Just me."
    },
    {
     "id": "both",
     "lead": "Both everyone and me.",
     "text": "Reason backs doing what’s best for everyone, and also doing what’s best for me. When the two clash, I can’t say which should win.",
     "note": "Henry Sidgwick’s “dualism of practical reason.” This counts half toward each.",
     "label": "Dualism of practical reason"
    }
   ]
  },
  {
   "id": "e4b",
   "section": "ethics",
   "short": "How to decide",
   "when": {
    "q": "e4a",
    "in": [
     "everyone",
     "close",
     "prior",
     "both"
    ]
   },
   "text": "When you actually decide what to do, should you work out the results each time?",
   "hint": "A surgeon has five patients who will die without organ transplants. A healthy visitor in the waiting room is a match for all five. Killing him would save five lives, and no one would ever find out. This question is about how to handle a case like that: calculate the results each time, or follow a rule like “never kill patients”?",
   "options": [
    {
     "id": "act",
     "text": "The right act is the one with the best results, so I should aim at that directly, every time.",
     "note": "In the surgeon case: if it truly saves five and no one will ever know, the right act is to kill the one.",
     "label": "Act consequentialism",
     "lead": "Yes, case by case."
    },
    {
     "id": "twolevel",
     "text": "The right act is still the one with the best results. Trusted rules and habits are just the best way to find it, so I follow them and calculate only in rare cases or when rules clash.",
     "note": "In the surgeon case: perhaps killing would be best this once, but a good doctor sticks to “never kill patients.” Doctors who calculate at moments like this will get it wrong far more often than right.",
     "label": "Two-level consequentialism",
     "lead": "Usually not: rules as shortcuts."
    },
    {
     "id": "rule",
     "text": "What makes an act right is following the rules that would turn out best if everyone accepted them. Breaking one is wrong even when it would turn out better this time.",
     "note": "In the surgeon case: a world where doctors may kill patients for their organs is a world where no one dares visit a hospital. The rule “never kill patients” makes everyone better off, so killing is wrong even if this once it would save five.",
     "label": "Rule consequentialism",
     "lead": "No: the rules decide."
    }
   ]
  },
  {
   "id": "e4r",
   "section": "ethics",
   "short": "Any line you’d never cross?",
   "when": {
    "q": "e4a",
    "in": [
     "everyone",
     "close",
     "prior",
     "both"
    ],
    "not": {
     "q": "e2",
     "in": [
      "req"
     ]
    }
   },
   "text": "Is there anything you’d never do, even if it truly gave the best results?",
   "note": "Duty-based thinkers get asked whether a duty can be outweighed. This is the same question from the other side.",
   "options": [
    {
     "id": "none",
     "lead": "No.",
     "text": "If it truly gives the best results, it’s right.",
     "label": "Pure consequentialism"
    },
    {
     "id": "constrained",
     "lead": "Yes.",
     "text": "Some acts are off-limits, like killing an innocent person or torture, even when crossing the line would turn out better.",
     "label": "Constrained consequentialism"
    },
    {
     "id": "prereq",
     "text": "Not a hard line, but I may sometimes put my own life and projects first, even when that isn’t best overall.",
     "note": "You needn’t give up everything you care about just because a stranger would gain a little more.",
     "label": "Agent-centred prerogative",
     "lead": "No line, but room for me."
    }
   ]
  },
  {
   "id": "e4c",
   "section": "ethics",
   "short": "The experience machine",
   "when": {
    "q": "e4a",
    "in": [
     "everyone",
     "close",
     "prior",
     "both"
    ]
   },
   "text": "A machine could give you a perfect simulated life: any experience you want, and you’d never know it wasn’t real. Would you plug in for life?",
   "note": "This tests what “a good result” really means: feeling good, getting what you want, things that are good for you whether you want them or not, or something beyond anyone’s well-being.",
   "options": [
    {
     "id": "hedon",
     "text": "If it feels just as good, it is just as good.",
     "label": "Hedonism",
     "lead": "Yes, plug in."
    },
    {
     "id": "pref",
     "text": "I want my wishes to actually come true, not just to feel as if they had.",
     "label": "Preference satisfaction",
     "lead": "No: I want it real."
    },
    {
     "id": "objlist",
     "text": "Real friendship, knowledge and achievement are good for you whether or not you want them.",
     "label": "Objective list theory",
     "lead": "No: some things are just good."
    },
    {
     "id": "nonwel",
     "lead": "No, and not only for my sake.",
     "text": "A good result isn’t just about how lives go. Some things, like beauty or knowledge, are good in themselves even if no one is better off for them.",
     "label": "Ideal utilitarianism (non-welfarist)"
    }
   ]
  },
  {
   "id": "e4d",
   "section": "ethics",
   "short": "Your own good",
   "when": {
    "q": "e4a",
    "in": [
     "me",
     "both"
    ]
   },
   "text": "What is “your own good”: what makes your life go best for you?",
   "options": [
    {
     "id": "pleasure",
     "text": "Pleasure and freedom from pain. Not wild partying: calm, lasting pleasure.",
     "label": "Epicurean egoism",
     "lead": "Pleasure, wisely managed."
    },
    {
     "id": "desire",
     "text": "Whatever you actually want, whatever it is.",
     "label": "Desire-based egoism",
     "lead": "Getting what you want."
    },
    {
     "id": "flourish",
     "text": "Thriving as a rational, independent person: living by your own judgment and achievements, not depending on others.",
     "label": "Rational egoism",
     "lead": "Living by your own lights."
    },
    {
     "id": "longrun",
     "text": "This usually means cooperating with others, because helping them often pays you back.",
     "label": "Enlightened self-interest",
     "lead": "Your long-run interest."
    }
   ]
  },
  {
   "id": "e4e",
   "section": "ethics",
   "short": "Where duties come from",
   "when": {
    "q": "e4",
    "in": [
     "duties"
    ]
   },
   "text": "Where do these duties come from?",
   "options": [
    {
     "id": "deont",
     "text": "Some acts, like lying or killing the innocent, are simply wrong, and careful reasoning shows it.",
     "label": "Deontology",
     "lead": "From reason itself."
    },
    {
     "id": "contract",
     "text": "Right rules are ones you could justify to everyone affected: rules no one could reasonably reject.",
     "note": "Could you defend this to the face of the person it hurts? (This view is called contractualism.)",
     "label": "Contractualism",
     "lead": "From what we could all accept."
    },
    {
     "id": "divine",
     "text": "God’s commands, or the moral order God built into human nature.",
     "label": "Theistic ethics",
     "lead": "From God."
    }
   ]
  },
  {
   "id": "e4k",
   "section": "ethics",
   "short": "Which line matters",
   "torn": true,
   "when": {
    "q": "e4e",
    "in": [
     "deont"
    ]
   },
   "text": "Two acts can have the same results and still seem morally different. Which difference matters most?",
   "hint": "Letting a man drown when you could save him, versus drowning him yourself. Bombing a factory knowing civilians nearby will die, versus bombing the civilians to spread terror. Taking one patient’s organs to save five, versus giving a scarce drug to five patients instead of one.",
   "options": [
    {
     "id": "doing",
     "text": "Causing harm is worse than letting it happen. Killing is worse than letting die, even when the outcome is the same.",
     "label": "Doing and allowing",
     "lead": "Doing versus allowing."
    },
    {
     "id": "intend",
     "text": "Harm you aim at, as your goal or your way of getting it, is worse than harm you only foresee as a side effect.",
     "label": "Double effect",
     "lead": "Aiming versus side effect."
    },
    {
     "id": "means",
     "text": "Treating a person merely as a tool for your goal is what makes it wrong.",
     "label": "Means principle",
     "lead": "Using someone."
    }
   ]
  },
  {
   "id": "e4l",
   "section": "ethics",
   "short": "Why the constraint holds",
   "when": {
    "q": "e4e",
    "in": [
     "deont"
    ]
   },
   "text": "Why can’t you kill one innocent person to save five?",
   "options": [
    {
     "id": "victim",
     "text": "He has a right not to be used, and five people’s need doesn’t cancel it.",
     "label": "Victim-centred constraint",
     "lead": "Because of the victim."
    },
    {
     "id": "agent",
     "text": "Each person is answerable first for what they themselves do, and the killing would be yours.",
     "label": "Agent-centred constraint",
     "lead": "Because of you.",
     "note": "So you must not kill even to prevent five other killings."
    }
   ]
  },
  {
   "id": "e4f",
   "section": "ethics",
   "short": "Can duty be outweighed",
   "when": {
    "q": "e4e",
    "in": [
     "deont"
    ]
   },
   "text": "Can a duty ever be outweighed if enough is at stake?",
   "options": [
    {
     "id": "absolute",
     "text": "Some acts are wrong whatever the consequences.",
     "note": "Even lying to a murderer at your door to save a friend? Kant said yes, it’s still wrong.",
     "label": "Absolutism",
     "lead": "Never."
    },
    {
     "id": "threshold",
     "text": "Don’t torture one person to save five, but maybe to save a city.",
     "label": "Threshold deontology",
     "lead": "Only at a catastrophe."
    },
    {
     "id": "mixed",
     "text": "Some duties can never be outweighed, like not torturing the innocent. Others can, like keeping a promise.",
     "label": "Mixed deontology",
     "lead": "Depends on the duty."
    }
   ]
  },
  {
   "id": "e4g",
   "section": "ethics",
   "short": "Why agree",
   "when": {
    "q": "e4e",
    "in": [
     "contract"
    ]
   },
   "text": "Why would people agree to the rules?",
   "options": [
    {
     "id": "mutual",
     "text": "The rules benefit each person who agrees.",
     "note": "A deal: I won’t steal from you if you don’t steal from me.",
     "label": "Contractarianism",
     "lead": "It pays each of us."
    },
    {
     "id": "fair",
     "text": "They treat each person as an equal, so even the weakest person could accept them.",
     "label": "Contractualism",
     "lead": "They’re fair to all."
    }
   ]
  },
  {
   "id": "e4s",
   "section": "ethics",
   "short": "Who gets a say",
   "when": {
    "q": "e4e",
    "in": [
     "contract"
    ]
   },
   "text": "Animals and newborn babies can’t bargain or reason with us. Do the rules protect them?",
   "note": "The classic test for agreement-based ethics: what about those who can’t agree?",
   "options": [
    {
     "id": "indirect",
     "lead": "Only indirectly.",
     "text": "They’re protected because the people who can agree care about them.",
     "label": "Indirect protection"
    },
    {
     "id": "trustee",
     "lead": "Yes.",
     "text": "Someone can speak for them, and the rules must be justifiable on their behalf too.",
     "note": "Like a guardian representing a child.",
     "label": "Trusteeship"
    },
    {
     "id": "gap",
     "text": "Agreement covers how we treat each other. Our duties to them must come from somewhere else.",
     "label": "Limited scope",
     "lead": "A real gap."
    }
   ]
  },
  {
   "id": "e4h",
   "section": "ethics",
   "short": "Euthyphro",
   "when": {
    "q": "e4e",
    "in": [
     "divine"
    ]
   },
   "text": "Is an act right because God commands it, or does God command it because it’s right?",
   "note": "A puzzle from Plato, about 2,400 years old. If the first, could God have made cruelty right? If the second, rightness doesn’t come from God after all.",
   "options": [
    {
     "id": "command",
     "text": "The command alone makes it right, so God could have commanded otherwise.",
     "label": "Voluntarism",
     "lead": "Because God commands it."
    },
    {
     "id": "right",
     "text": "God sees what is good and commands it.",
     "label": "Natural law",
     "lead": "Because it’s right."
    },
    {
     "id": "nature",
     "text": "God’s commands flow from God’s good nature, so neither the command nor the rightness comes first.",
     "label": "Modified divine command theory",
     "lead": "From God’s nature."
    }
   ]
  },
  {
   "id": "e4t",
   "section": "ethics",
   "short": "Abraham and Isaac",
   "when": {
    "q": "e4e",
    "in": [
     "divine"
    ]
   },
   "text": "In Genesis, God commands Abraham to sacrifice his son. If God truly commanded something like this, would doing it be right?",
   "options": [
    {
     "id": "yes",
     "lead": "Yes.",
     "text": "If God commands it, it is right, however it seems to us.",
     "note": "Kierkegaard said faith can rise above ordinary ethics. Aquinas argued that God, as lord of life and death, could rightly command it.",
     "label": "Obedience to God"
    },
    {
     "id": "no",
     "lead": "No.",
     "text": "A good God could never command cruelty, so a command like this can’t really be from God.",
     "label": "Goodness limits commands"
    },
    {
     "id": "test",
     "text": "God never meant it to happen. The story is a test of faith, not a real demand.",
     "label": "Test of faith",
     "lead": "It was only a test."
    }
   ]
  },
  {
   "id": "e4i",
   "section": "ethics",
   "short": "Why the close count more",
   "when": {
    "q": "e4",
    "in": [
     "care"
    ]
   },
   "text": "Why do the people close to you count for more?",
   "options": [
    {
     "id": "special",
     "text": "Relationships are valuable in themselves and give rise to special duties.",
     "note": "A man who can save only one of two drowning people saves his wife. Bernard Williams said he shouldn’t need to check first whether that’s allowed.",
     "label": "Special obligations",
     "lead": "Relationships create duties."
    },
    {
     "id": "graded",
     "text": "Caring well for your own is how goodness spreads to everyone, starting at home and widening out.",
     "label": "Graded love",
     "lead": "Love spreads outward."
    },
    {
     "id": "care",
     "text": "Morality begins in caring for particular people. Rules about “everyone” come later, if at all.",
     "label": "Care ethics",
     "lead": "Care comes first."
    }
   ]
  },
  {
   "id": "e4w",
   "section": "ethics",
   "short": "Strangers far away",
   "when": {
    "q": "e4",
    "in": [
     "care"
    ]
   },
   "text": "Do you owe anything to strangers far away whom you will never meet?",
   "options": [
    {
     "id": "little",
     "lead": "Not much.",
     "text": "Real care needs a real relationship, or at least the chance of one.",
     "label": "Care for the near"
    },
    {
     "id": "institutions",
     "lead": "Yes, through just institutions.",
     "text": "Care for distant people works through fair laws, aid and politics.",
     "label": "Care and justice"
    },
    {
     "id": "direct",
     "lead": "Yes, directly.",
     "text": "Caring about suffering anywhere is part of being a caring person.",
     "label": "Global care"
    }
   ]
  },
  {
   "id": "e4j",
   "section": "ethics",
   "short": "What makes a virtue",
   "when": {
    "q": "e4",
    "in": [
     "virtue"
    ]
   },
   "text": "What makes a trait, like courage or honesty, a virtue?",
   "options": [
    {
     "id": "eudaim",
     "text": "It helps its owner live a flourishing human life.",
     "note": "A coward who runs from every risk, or a liar no one can trust, can’t fully live well. Courage and honesty are part of what a good human life is made of.",
     "label": "Eudaimonism",
     "lead": "It helps you live well."
    },
    {
     "id": "sentiment",
     "text": "It’s what people naturally admire and approve of in a good character.",
     "label": "Sentimentalism",
     "lead": "We naturally admire it."
    },
    {
     "id": "conseq",
     "text": "It reliably does good for others and the world.",
     "note": "Kindness is a virtue because kind people make lives go better.",
     "label": "Virtue consequentialism",
     "lead": "It does good."
    },
    {
     "id": "role",
     "text": "It fits the roles and relationships you’re in, such as being a good son, a good friend or a good teacher.",
     "label": "Confucian role ethics",
     "lead": "It fits your roles."
    }
   ]
  },
  {
   "id": "e4m",
   "section": "ethics",
   "short": "Is virtue enough?",
   "when": {
    "q": "e4",
    "in": [
     "virtue"
    ]
   },
   "text": "Can a good person living in prison, poverty and pain still have a good life?",
   "options": [
    {
     "id": "stoic",
     "lead": "Yes.",
     "text": "Virtue is all you need; nothing outside your character can harm what truly matters.",
     "note": "The Stoic Epictetus was born a slave and was lame in one leg.",
     "label": "Stoicism"
    },
    {
     "id": "aristotle",
     "lead": "Not fully.",
     "text": "Virtue is the heart of a good life, but it also needs some health, friends and luck.",
     "note": "Aristotle: no one calls a man happy who is broken on the wheel, however good he is.",
     "label": "Aristotelian view"
    }
   ]
  },
  {
   "id": "e4n",
   "section": "ethics",
   "short": "Do the virtues come together?",
   "when": {
    "q": "e4",
    "in": [
     "virtue"
    ]
   },
   "text": "Can someone be truly brave but cruel, or truly honest but cowardly?",
   "options": [
    {
     "id": "unity",
     "lead": "No.",
     "text": "Every real virtue needs practical wisdom (good judgment about how to act), and that wisdom brings all the other virtues with it.",
     "note": "A “brave” bully only has boldness, not courage.",
     "label": "Unity of virtue"
    },
    {
     "id": "disunity",
     "lead": "Yes.",
     "text": "The virtues are separate traits, and people can have some without others.",
     "label": "Disunity of virtue"
    }
   ]
  },
  {
   "id": "e4o",
   "section": "ethics",
   "short": "Deciding in a hard case",
   "when": {
    "q": "e4",
    "in": [
     "virtue"
    ]
   },
   "text": "Critics say “be virtuous” doesn’t tell you what to do. In a hard case, how should you decide?",
   "options": [
    {
     "id": "agent",
     "text": "Ask what a fully virtuous person would do in your place, and do that.",
     "label": "Qualified-agent view",
     "lead": "Copy the ideal person."
    },
    {
     "id": "wisdom",
     "lead": "No formula.",
     "text": "A wise person sees what matters in this situation, and that seeing can’t be turned into rules.",
     "label": "Practical wisdom"
    },
    {
     "id": "ritual",
     "text": "Follow the roles, rituals and examples that have trained your judgment.",
     "label": "Ritual and exemplars",
     "lead": "Follow trained ways."
    }
   ]
  },
  {
   "id": "e4p",
   "section": "ethics",
   "short": "When values conflict",
   "when": {
    "q": "e4",
    "in": [
     "plural"
    ]
   },
   "text": "When duties or values pull against each other, how do you decide?",
   "hint": "You promised to meet a friend, but on the way you pass an accident where you could help. Keeping promises matters, and so does helping.",
   "options": [
    {
     "id": "ross",
     "text": "Each duty always counts for something, but only judgment in the case tells you which wins. No ranking is fixed in advance.",
     "note": "You know both duties count; only the situation tells you which wins.",
     "label": "Rossian pluralism",
     "lead": "Weigh them each time."
    },
    {
     "id": "ranked",
     "text": "Some always outrank others: for example, justice before wellbeing, or not harming before helping.",
     "label": "Ranked pluralism",
     "lead": "A fixed ranking."
    },
    {
     "id": "particular",
     "text": "A reason that counts in favour in one case can count against in another.",
     "note": "That a joke is funny usually counts in its favour, but not at a funeral.",
     "label": "Particularism",
     "lead": "No general rules at all."
    }
   ]
  },
  {
   "id": "e4u",
   "section": "ethics",
   "short": "How you know what counts",
   "when": {
    "q": "e4",
    "in": [
     "plural"
    ]
   },
   "text": "How do you know which considerations count, such as keeping promises or not causing harm?",
   "options": [
    {
     "id": "intuition",
     "lead": "By intuition.",
     "text": "On careful reflection, it’s simply evident that they matter.",
     "label": "Ethical intuitionism"
    },
    {
     "id": "equilibrium",
     "text": "Test principles against cases and adjust both until they fit together.",
     "note": "If a principle says something monstrous about a case, revise the principle, or rethink the case.",
     "label": "Reflective equilibrium",
     "lead": "By back-and-forth testing."
    },
    {
     "id": "experience",
     "text": "Experience and upbringing train you to see what matters.",
     "label": "Trained perception",
     "lead": "By training."
    }
   ]
  },
  {
   "id": "e4q",
   "section": "ethics",
   "short": "Is any authentic choice as good?",
   "when": {
    "q": "e4",
    "in": [
     "exist"
    ]
   },
   "text": "If no values are handed to you, what makes one choice better than another?",
   "options": [
    {
     "id": "authentic",
     "text": "What matters is choosing freely and owning it, as if choosing for everyone, not hiding behind excuses.",
     "note": "Sartre: in choosing for myself, I choose an image of what a human being should be.",
     "label": "Authenticity",
     "lead": "Only how you choose."
    },
    {
     "id": "beauvoir",
     "lead": "Whether it frees others too.",
     "text": "To truly want your own freedom, you must also want other people’s.",
     "note": "Beauvoir: an oppressor can’t be authentically free.",
     "label": "Ethics of ambiguity"
    },
    {
     "id": "nietzsche",
     "lead": "Whether its values are higher.",
     "text": "Some values you create are higher than others: braver, more life-affirming.",
     "label": "Nietzschean value creation"
    }
   ]
  },
  {
   "id": "e4v",
   "section": "ethics",
   "short": "Bad faith",
   "when": {
    "q": "e4",
    "in": [
     "exist"
    ]
   },
   "text": "You tell yourself you had no choice but to follow your boss’s unfair orders. Is that a failure?",
   "options": [
    {
     "id": "badfaith",
     "lead": "Yes.",
     "text": "Pretending you aren’t free is what Sartre called “bad faith”: lying to yourself about your own freedom. It’s the central failure.",
     "label": "Bad faith"
    },
    {
     "id": "situated",
     "lead": "Sometimes.",
     "text": "Real pressures can genuinely limit freedom, especially for the oppressed.",
     "label": "Situated freedom"
    },
    {
     "id": "nofail",
     "lead": "No.",
     "text": "Calling it a failure is just another value someone chose.",
     "label": "No standard of failure"
    }
   ]
  },
  {
   "id": "e5",
   "section": "ethics",
   "short": "Is morality objective?",
   "text": "When you say “torturing a child for fun is wrong”, are you stating a fact about the world, the way “water boils at 100°C” does?",
   "hint": "Compare “Water boils at 100°C” (a fact), “Chocolate is the best flavour” (a taste), and “Hooray for my team!” (a feeling). Is “Torturing a child for fun is wrong” more like the first, or one of the others?",
   "options": [
    {
     "id": "yes",
     "text": "It’s true whatever anyone thinks or feels.",
     "note": "It would stay true even if everyone believed otherwise.",
     "label": "Moral realism",
     "lead": "Yes, an objective fact."
    },
    {
     "id": "construct",
     "text": "Moral truths aren’t facts “out there”. They’re what careful reasoning about how to act produces.",
     "note": "Kant’s example: you can’t make “lie whenever it suits you” a rule for everyone, because then no one would believe anyone and lying would stop working. Reason alone shows the rule fails; no fact “out there” is needed.",
     "label": "Constructivism",
     "lead": "A product of reasoning."
    },
    {
     "id": "no",
     "text": "Something else is going on when I say it.",
     "note": "You may still be sure torture is wrong. The question is what that sureness is.",
     "label": "Moral anti-realism",
     "lead": "No, not like that."
    }
   ]
  },
  {
   "id": "e5a",
   "section": "ethics",
   "short": "What a moral claim is",
   "when": {
    "q": "e5",
    "in": [
     "no"
    ]
   },
   "text": "Then what is “Torturing a child for fun is wrong”?",
   "options": [
    {
     "id": "relativism",
     "text": "It’s true for some people or cultures, and false for others.",
     "label": "Relativism",
     "lead": "True for some, not others."
    },
    {
     "id": "error",
     "text": "Right and wrong don’t exist, so the sentence describes something that isn’t there.",
     "note": "J. L. Mackie’s argument: a moral fact would be a very strange thing, out in the world yet somehow commanding you to act. Nothing like that exists. (Called error theory: moral talk rests on a mistake.)",
     "label": "Error theory",
     "lead": "Simply false."
    },
    {
     "id": "noncog",
     "text": "It’s neither true nor false: it expresses a feeling, like “Boo, torture!”",
     "label": "Non-cognitivism",
     "lead": "A feeling, not a claim."
    }
   ]
  },
  {
   "id": "e5b",
   "section": "ethics",
   "short": "Kind of moral fact",
   "when": {
    "q": "e5",
    "in": [
     "yes"
    ]
   },
   "text": "What kind of fact is a moral fact?",
   "options": [
    {
     "id": "natural",
     "text": "Like facts about health, it’s something science could in principle study.",
     "label": "Naturalist realism",
     "lead": "A natural fact."
    },
    {
     "id": "nonnatural",
     "text": "Not physical, and not something science could measure, a bit like truths of logic.",
     "label": "Non-naturalism",
     "lead": "A special kind of fact."
    },
    {
     "id": "theistic",
     "text": "It’s grounded in God’s nature.",
     "label": "Theistic realism",
     "lead": "A fact about God."
    }
   ]
  },
  {
   "id": "e5f",
   "section": "ethics",
   "short": "Who moral truths bind",
   "when": {
    "q": "e5",
    "in": [
     "construct"
    ]
   },
   "text": "Do moral truths bind everyone the same way, even someone who doesn’t care about morality?",
   "options": [
    {
     "id": "kantian",
     "lead": "Yes.",
     "text": "Anyone who can reason, just by thinking clearly about what to do, is committed to the same basic principles.",
     "label": "Kantian constructivism"
    },
    {
     "id": "humean",
     "lead": "No.",
     "text": "What you have reason to do depends on the values you already hold; a perfectly consistent monster may have no reason to be kind.",
     "label": "Humean constructivism"
    }
   ]
  },
  {
   "id": "e5c",
   "section": "ethics",
   "short": "Slavery elsewhere",
   "when": {
    "q": "e5a",
    "in": [
     "relativism"
    ]
   },
   "text": "A society once approved of slavery. Was slavery wrong there?",
   "options": [
    {
     "id": "universal",
     "text": "Slavery was wrong in that society, whatever it approved.",
     "label": "Relativism with universal limits",
     "lead": "Yes, wrong there too."
    },
    {
     "id": "cultural",
     "text": "What’s right depends on the culture of the people acting, and theirs approved.",
     "label": "Agent relativism",
     "lead": "Not wrong for them."
    },
    {
     "id": "standards",
     "text": "It depends who’s judging: wrong by our culture’s standards, right by theirs, and neither judgment is mistaken.",
     "label": "Appraiser relativism",
     "lead": "Wrong to us, right to them."
    }
   ]
  },
  {
   "id": "e5d",
   "section": "ethics",
   "short": "Keep moral talk?",
   "when": {
    "q": "e5a",
    "in": [
     "error"
    ]
   },
   "text": "If nothing is truly right or wrong, should we keep talking as if it were?",
   "options": [
    {
     "id": "fiction",
     "text": "Keep using moral words without believing them, the way we say Sherlock Holmes lives on Baker Street.",
     "label": "Fictionalism",
     "lead": "Keep it, as make-believe."
    },
    {
     "id": "abolish",
     "text": "We’d be better off dropping moral talk altogether.",
     "label": "Abolitionism",
     "lead": "Drop it."
    },
    {
     "id": "conserve",
     "text": "Go on really believing moral claims, even though they’re false. The belief does more good than harm.",
     "label": "Conservationism",
     "lead": "Keep believing it."
    }
   ]
  },
  {
   "id": "e5e",
   "section": "ethics",
   "short": "Better attitudes?",
   "when": {
    "q": "e5a",
    "in": [
     "noncog"
    ]
   },
   "text": "Can one moral attitude still be better than another?",
   "options": [
    {
     "id": "quasi",
     "text": "Some attitudes are better informed, more consistent and easier to defend.",
     "label": "Quasi-realism",
     "lead": "Yes, some are better."
    },
    {
     "id": "emotiv",
     "text": "They’re just different feelings, like preferring tea to coffee.",
     "label": "Emotivism",
     "lead": "No, just different."
    }
   ]
  },
  {
   "id": "a1",
   "section": "art",
   "short": "Is beauty objective?",
   "text": "Is beauty in the thing, or in us?",
   "note": "When you call a sunset beautiful, are you describing the sunset or your reaction to it?",
   "hint": "Almost everyone finds a clear starry sky beautiful, and almost no one finds a rubbish heap beautiful. Is that agreement a discovery about skies and heaps, or a fact about human beings?",
   "options": [
    {
     "id": "thing",
     "lead": "In the thing.",
     "text": "“That sunset is beautiful” is true or false of the sunset itself, whatever anyone feels.",
     "label": "Aesthetic realism"
    },
    {
     "id": "us",
     "lead": "In us.",
     "text": "Calling it beautiful is about how people respond to it.",
     "label": "Response-based view",
     "note": "This includes views where beauty is real the way colour is: grass really is green, but “green” is about how it looks to eyes like ours."
    },
    {
     "id": "neither",
     "lead": "Neither.",
     "text": "“That sunset is beautiful” doesn’t describe anything. It expresses delight, like “Wow!”",
     "label": "Aesthetic non-cognitivism"
    }
   ]
  },
  {
   "id": "a1b",
   "section": "art",
   "short": "What beauty is",
   "when": {
    "q": "a1",
    "in": [
     "thing"
    ]
   },
   "text": "What do beautiful things have that makes them beautiful?",
   "hint": "A Greek temple, a snowflake, a cheetah at full speed and an elegant mathematical proof are all called beautiful. Is there one thing they share?",
   "options": [
    {
     "id": "harmony",
     "lead": "Harmony.",
     "text": "Order, proportion and unity in variety: many parts fitting together into one whole.",
     "note": "The Pythagoreans found beauty in the simple number ratios behind musical harmony.",
     "label": "Classical theory of beauty"
    },
    {
     "id": "higher",
     "lead": "Something higher shining through.",
     "text": "Beautiful things share in, or reflect, a perfect Beauty beyond the world we see.",
     "note": "Plato: a lover of beauty climbs from one beautiful body to beautiful souls, ideas, and finally Beauty itself.",
     "label": "Platonism about beauty"
    },
    {
     "id": "fit",
     "lead": "Being fit for its job.",
     "text": "Being well made for what it is or does: a good tool, a healthy body, an animal built for its life.",
     "note": "In Xenophon’s memoir, Socrates says even a dung basket is beautiful if it does its job well, and a golden shield ugly if it doesn’t.",
     "label": "Functional beauty"
    },
    {
     "id": "simple",
     "lead": "No recipe.",
     "text": "Beauty is a real quality, but no rule about shape, order or use captures it. You learn to see it, the way you learn to see colours.",
     "label": "Non-reductive aesthetic realism"
    },
    {
     "id": "transient",
     "lead": "Imperfection and passing.",
     "text": "Beauty lives in what is worn, uneven, incomplete or fading: a cracked tea bowl, its repair left visible; cherry blossoms that fall within a week.",
     "note": "This is the Japanese ideal of wabi-sabi, close to mono no aware: the gentle ache of things passing.",
     "label": "Wabi-sabi aesthetics"
    }
   ]
  },
  {
   "id": "a1a",
   "section": "art",
   "short": "Better taste?",
   "when": {
    "q": "a1",
    "in": [
     "us"
    ]
   },
   "text": "Is anyone’s taste better than anyone else’s?",
   "note": "Is a trained musician’s judgment of a song better than a random listener’s?",
   "hint": "Hume’s story: two men taste a barrel of wine. One says it tastes faintly of leather, the other of iron. Everyone laughs at them, until the barrel is emptied and an old key on a leather strap is found at the bottom. Can judgments of art be right or wrong in the same way?",
   "options": [
    {
     "id": "better",
     "lead": "Yes.",
     "text": "People with more practice, attention and fewer biases judge better. The standard is what such ideal judges would agree on.",
     "label": "Ideal-critic theory"
    },
    {
     "id": "kant",
     "lead": "Yes: beauty claims everyone’s agreement.",
     "text": "Finding something beautiful rests on a feeling, not a rule, yet it demands that everyone should agree. Moved by a sunset, you don’t say “beautiful to me”; you expect others to see it too.",
     "label": "Kantian universality"
    },
    {
     "id": "relative",
     "lead": "Only within a tradition.",
     "text": "Each culture or tradition has real standards, and inside one you can judge better or worse. But no standard stands above them all.",
     "note": "A judge of Chinese opera and a judge of jazz can each be expert, by different standards.",
     "label": "Aesthetic relativism"
    },
    {
     "id": "none",
     "lead": "No.",
     "text": "No one’s taste is better than anyone else’s.",
     "label": "Subjectivism"
    }
   ]
  },
  {
   "id": "a1c",
   "section": "art",
   "short": "Better responses?",
   "when": {
    "q": "a1",
    "in": [
     "neither"
    ]
   },
   "text": "Can one response to beauty still be better than another?",
   "note": "You’ve said “That’s beautiful” states no fact. The question is whether some such reactions are still more fitting than others.",
   "options": [
    {
     "id": "quasi",
     "lead": "Yes.",
     "text": "Some reactions are better informed, more attentive and easier to defend, even though none of them states a fact.",
     "label": "Aesthetic quasi-realism"
    },
    {
     "id": "emotiv",
     "lead": "No.",
     "text": "They are just different reactions, like preferring tea to coffee.",
     "label": "Aesthetic emotivism"
    }
   ]
  },
  {
   "id": "a4",
   "section": "art",
   "short": "What art is",
   "text": "What makes something a work of art at all?",
   "note": "Not good art: art, as opposed to an ordinary object.",
   "hint": "In 1917 Marcel Duchamp bought a urinal, signed it “R. Mutt”, and sent it to an exhibition as Fountain. In 1964 Andy Warhol showed Brillo Boxes that looked just like the soap-pad cartons in any supermarket. If these are art and the supermarket’s cartons aren’t, what’s the difference?",
   "options": [
    {
     "id": "repr",
     "lead": "It represents.",
     "text": "It imitates or depicts something: a scene, a person, an action.",
     "label": "Mimetic theory"
    },
    {
     "id": "express",
     "lead": "It expresses.",
     "text": "It expresses feelings: making it is how its maker works out and shows what they feel.",
     "label": "Expression theory",
     "note": "Tolstoy added that art must pass the feeling on to you; Collingwood said stirring up feelings on purpose is mere craft."
    },
    {
     "id": "aesthetic",
     "lead": "It’s made for experiencing.",
     "text": "It’s made to be looked at, listened to or read for its beauty or its form, not for some practical use.",
     "label": "Aesthetic definition"
    },
    {
     "id": "artworld",
     "lead": "The art world.",
     "text": "It counts as art because of how it fits into the world of artists, galleries and art history. A urinal becomes art when it’s shown and understood as art.",
     "label": "Institutional and historical theories",
     "note": "Even “it’s art if an artist says it is” belongs here."
    },
    {
     "id": "cluster",
     "lead": "Enough of the usual features.",
     "text": "No single feature is required. Beauty, expression, skill, meaning, being made for an audience: a thing with enough of them is art.",
     "label": "Cluster account"
    },
    {
     "id": "open",
     "lead": "It can’t be defined.",
     "text": "No list of features will ever fit all art, because artists keep doing new things. Each new case, like a row of bricks laid on a gallery floor, needs a fresh decision.",
     "label": "Anti-essentialism about art"
    }
   ]
  },
  {
   "id": "a4a",
   "section": "art",
   "short": "What the art world adds",
   "when": {
    "q": "a4",
    "in": [
     "artworld"
    ]
   },
   "text": "What exactly does the art world add?",
   "note": "Warhol’s Brillo Boxes and the supermarket’s cartons look the same, so something besides looks makes one of them art.",
   "options": [
    {
     "id": "status",
     "lead": "Status.",
     "text": "Someone acting for the art world, such as an artist or a gallery, presents it to an art public as art.",
     "label": "Institutional theory"
    },
    {
     "id": "meaning",
     "lead": "Meaning.",
     "text": "It is about something, and only the history and theory of art let it mean that. Warhol’s boxes ask what art is; the supermarket’s cartons are about nothing.",
     "label": "Artworld theory (Danto)"
    },
    {
     "id": "history",
     "lead": "A link to past art.",
     "text": "Its maker means it to be treated the way earlier art was. Someone who hangs driftwood on a wall to be gazed at the way people gaze at sculpture is making art.",
     "label": "Historical definition"
    }
   ]
  },
  {
   "id": "a9",
   "section": "art",
   "short": "AI art",
   "text": "An AI produces a striking image from a one-line prompt. Is it art?",
   "note": "Set aside whether it’s good. The question is whether it’s art at all, and whose.",
   "options": [
    {
     "id": "yes",
     "lead": "Yes, but nobody is its artist.",
     "text": "If it looks and works like art, it’s art, even with no artist behind it.",
     "label": "Product view of AI art"
    },
    {
     "id": "tool",
     "lead": "Yes, and it’s the person’s.",
     "text": "The human who prompts and picks is the artist. The AI is a tool, like a camera.",
     "label": "Tool view of AI art"
    },
    {
     "id": "ai",
     "lead": "Yes, and the AI is its artist.",
     "text": "It made creative choices that no human made. The prompt only set it going.",
     "label": "AI authorship"
    },
    {
     "id": "no",
     "lead": "No.",
     "text": "Art needs a maker who means or feels something by it. The AI means and feels nothing, and one line of prompt is too little to make the person its artist.",
     "label": "Intention requirement"
    }
   ]
  },
  {
   "id": "a5",
   "section": "art",
   "short": "Artist’s intention",
   "text": "A poet publishes a poem about a closed door and an empty chair. Every reader takes it to be about a lost love. After her death, her private diary shows she meant it to be about her grandmother. What does the poem mean?",
   "note": "Underneath: does the artist’s intention fix what a work means?",
   "hint": "Bob Dylan insisted that “A Hard Rain’s a-Gonna Fall” was not about nuclear fallout, though many listeners heard it that way. Does his word settle what the song is about?",
   "options": [
    {
     "id": "actual",
     "lead": "What she meant.",
     "text": "The poem can bear that reading, so it’s about her grandmother. The artist’s intention decides, within what the work can carry.",
     "label": "Actual intentionalism"
    },
    {
     "id": "hypo",
     "lead": "The best-informed guess.",
     "text": "It means what an ideal reader, knowing the poem and its public context, would best guess she meant. A secret diary doesn’t count.",
     "label": "Hypothetical intentionalism"
    },
    {
     "id": "text",
     "lead": "What the words mean.",
     "text": "The meaning lies in the words and how language works. Her intention, public or private, is beside the point.",
     "note": "Wimsatt and Beardsley called judging a work by its author’s intention “the intentional fallacy”.",
     "label": "Anti-intentionalism"
    },
    {
     "id": "reader",
     "lead": "No single meaning.",
     "text": "Readers make meaning. The lost-love reading and the grandmother reading are both real, and neither is the correct one.",
     "note": "Roland Barthes called this “the death of the author”.",
     "label": "Reader-response theory"
    }
   ]
  },
  {
   "id": "a7",
   "section": "art",
   "short": "Forgery",
   "text": "A forger paints a “new Vermeer” so well that top experts call it a masterpiece. Years later it’s exposed as a fake. Is it now a worse painting than everyone thought?",
   "note": "This really happened: Han van Meegeren’s fake Vermeers fooled experts in the 1930s and 1940s.",
   "options": [
    {
     "id": "same",
     "lead": "No.",
     "text": "It looks exactly as it did, and how a painting looks is what makes it good as a painting. Only its price and its story have changed.",
     "note": "The fraud was wrong, but that’s a fact about the forger, not about the picture.",
     "label": "Aesthetic empiricism"
    },
    {
     "id": "learn",
     "lead": "Yes, and you can learn to see why.",
     "text": "Knowing it’s a fake is itself a reason to look harder, and differences you missed start to show. Today van Meegeren’s faces look like 1930s film stars, and no expert is fooled.",
     "note": "Nelson Goodman: knowing there is a difference already changes how you should look at it, even before you can see the difference.",
     "label": "Goodman’s perceptual view"
    },
    {
     "id": "achieve",
     "lead": "Yes, as an achievement.",
     "text": "A painting is also something someone did. Inventing that style was a great feat; imitating it 300 years later is a far smaller one.",
     "label": "Achievement view of forgery"
    },
    {
     "id": "context",
     "lead": "Yes, as a work.",
     "text": "What a work is depends on who made it, when and why. The same brushstrokes say something new in 1660 and only echo it in 1937, so the fake is a different work.",
     "label": "Contextualism"
    }
   ],
   "hint": "In classical Chinese painting, openly painting a new work in the manner of an old master (fang) was a respected art in its own right. Is the wrong in van Meegeren’s case the imitating, or the lie?"
  },
  {
   "id": "a2",
   "section": "art",
   "short": "What makes art great",
   "text": "What makes something a great work of art?",
   "note": "Think of a painting, song or film you’d call great, not just enjoyable.",
   "options": [
    {
     "id": "onlyform",
     "lead": "Only its form.",
     "text": "The way its shapes, sounds or words fit together. What it shows, says or teaches doesn’t add to its greatness as art.",
     "label": "Formalism"
    },
    {
     "id": "exper",
     "lead": "The experience it gives.",
     "text": "How rewarding it is to attend to: the richer and more absorbing the experience, the better the work.",
     "label": "Aesthetic experience theory"
    },
    {
     "id": "feeling",
     "lead": "The feeling it expresses.",
     "text": "It expresses a feeling truly and clearly, so you can feel it too.",
     "note": "A great song makes you feel what it is like to feel that way.",
     "label": "Expressivism"
    },
    {
     "id": "insight",
     "lead": "What it shows you.",
     "text": "It reveals something true about life and the world.",
     "note": "A great novel teaches you something true about people.",
     "label": "Cognitivism about art"
    },
    {
     "id": "skill",
     "lead": "The achievement.",
     "text": "The skill, daring and originality it took to make it.",
     "label": "Art as achievement"
    },
    {
     "id": "moral",
     "lead": "What it does for people.",
     "text": "Great art makes people better: it shapes character, binds a community, or moves people to act justly.",
     "note": "Confucian thinkers judged music by the character it forms; Tolstoy by whether it unites people.",
     "label": "Moral and social view of art"
    },
    {
     "id": "plural",
     "lead": "No single thing.",
     "text": "Different works are great for different reasons.",
     "label": "Pluralism about art"
    }
   ]
  },
  {
   "id": "a6",
   "section": "art",
   "short": "Aesthetic experience",
   "text": "Think of a time a piece of music really held your attention. What was that experience, at heart?",
   "note": "Philosophers were asked this in a 2020 survey.",
   "options": [
    {
     "id": "perception",
     "lead": "Close perceiving.",
     "text": "Noticing what’s there: the melody turning, the instruments answering each other, the tension building and breaking.",
     "label": "Perceptual view"
    },
    {
     "id": "pleasure",
     "lead": "Enjoyment.",
     "text": "You like what you hear, and that liking is the heart of it.",
     "label": "Hedonic view"
    },
    {
     "id": "unique",
     "lead": "Its own kind of state.",
     "text": "You lose track of yourself and of time. It isn’t just seeing or just enjoying, but something else that fills your mind.",
     "note": "Schopenhauer called this “will-less contemplation”. Indian aesthetics, from Bharata’s Nāṭyaśāstra on, calls it rasa; Abhinavagupta described it as savouring a feeling freed from your own personal stake in it.",
     "label": "Sui generis aesthetic experience"
    },
    {
     "id": "none",
     "lead": "Nothing special.",
     "text": "It’s ordinary attention and enjoyment, aimed at music. There’s no separate “aesthetic” kind of experience.",
     "note": "George Dickie called the idea of a special “aesthetic attitude” a myth.",
     "label": "Skepticism about aesthetic experience"
    }
   ],
   "when": {
    "q": "a2",
    "in": [
     "exper"
    ],
    "or": {
     "q": "a4",
     "in": [
      "aesthetic"
     ]
    }
   },
   "hint": "Think of the moment a song’s chorus finally comes back after the bridge. Is what happens mainly noticing the return, enjoying it, or something different from both?"
  },
  {
   "id": "a8",
   "section": "art",
   "short": "Popular and high art",
   "text": "Can a great pop song be as great a work of art as a great symphony?",
   "note": "Not which you’d rather listen to. Whether it can be as great as art.",
   "hint": "Compare a perfect two-minute pop song like the Beatles’ “Yesterday” with Beethoven’s Ninth Symphony.",
   "options": [
    {
     "id": "equal",
     "lead": "Yes.",
     "text": "The best pop songs can be every bit as great as the best symphonies. Short and simple doesn’t mean lesser.",
     "label": "Defence of popular art"
    },
    {
     "id": "higher",
     "lead": "No.",
     "text": "Pop songs can be wonderful, but the greatest works in deep, demanding traditions do more: they reward a lifetime of attention.",
     "label": "Hierarchy of the arts"
    },
    {
     "id": "incomp",
     "lead": "They can’t be compared.",
     "text": "Greatness is greatness of a kind. Asking if the best pop song beats the best symphony is like asking if the best sprinter beats the best chess player.",
     "label": "Incommensurability of kinds"
    },
    {
     "id": "industry",
     "lead": "No, because of how it’s made.",
     "text": "Music made to sell to millions gets standardised. It soothes listeners instead of challenging them.",
     "note": "Adorno and Horkheimer called this “the culture industry”.",
     "label": "Culture industry critique"
    },
    {
     "id": "social",
     "lead": "The ranking is social, not artistic.",
     "text": "“High art” is largely what powerful groups use to show they are cultured. The ranking tracks class, not quality.",
     "note": "The sociologist Pierre Bourdieu argued this from surveys of French taste.",
     "label": "Sociological critique of taste"
    }
   ]
  },
  {
   "id": "a3",
   "section": "art",
   "short": "Immoral art",
   "text": "Does a moral flaw in a work of art make it worse as art?",
   "note": "A film can be brilliantly made and also glorify cruelty. Does the cruelty make it worse as art? This is about what the work itself shows or invites, not about the artist’s private life.",
   "hint": "Leni Riefenstahl’s Triumph of the Will (1935) is Nazi propaganda celebrating Hitler. It is also often praised for its camera work and editing, which changed how films were made.",
   "options": [
    {
     "id": "autonomy",
     "lead": "No.",
     "text": "Artistic and moral value are separate. A work can be morally ugly and artistically great.",
     "label": "Autonomism"
    },
    {
     "id": "moderate",
     "lead": "Sometimes.",
     "text": "Only when the flaw spoils the work on its own terms, as when a comedy asks you to laugh at cruelty and decent viewers can’t.",
     "label": "Moderate moralism"
    },
    {
     "id": "ethicism",
     "lead": "Always, though it can be outweighed.",
     "text": "Any moral flaw in the attitude a work invites you to take counts against it as art, and any moral merit counts for it. Other strengths can still win out.",
     "label": "Ethicism"
    },
    {
     "id": "immoral2",
     "lead": "The flaw can even make it better.",
     "text": "When a work gets you to side with a monster, or to enjoy what you know is wrong, that very flaw can teach you things decent art can’t.",
     "label": "Immoralism",
     "note": "Not just showing evil, which everyone agrees great art can do, but inviting you to approve of it."
    },
    {
     "id": "moralism",
     "lead": "Yes, decisively.",
     "text": "Art’s purpose is moral, so art that corrupts is bad art, however well made.",
     "note": "Plato and Tolstoy held versions of this. So did Confucian thinkers such as Xunzi, who judged music by the character it forms.",
     "label": "Moralism"
    }
   ]
  },
  {
   "id": "m1",
   "section": "mind",
   "short": "What the mind is",
   "text": "Is your mind just your brain at work, or is there more to it?",
   "hint": "A scientist could map every neuron that fires when you taste chocolate. Would that map tell her what chocolate tastes like to you, or would something be left out?",
   "options": [
    {
     "id": "yes",
     "text": "Thoughts and feelings are things your brain does, the way digestion is something your stomach does. Nothing else is needed.",
     "label": "Physicalism",
     "lead": "Just the brain."
    },
    {
     "id": "no",
     "text": "Something about the mind, such as what pain feels like, can’t be fully explained by the brain alone.",
     "label": "Non-physicalism",
     "note": "Panpsychists and neutral monists who call themselves physicalists in a broad sense: pick this one. The next question has a place for you.",
     "lead": "There’s more to it."
    },
    {
     "id": "unclear",
     "lead": "The question isn’t clear.",
     "text": "Nobody can say exactly what counts as “physical,” so there’s nothing definite to answer yes or no to.",
     "note": "If “physical” means what today’s physics describes, the mind probably isn’t, since physics will change. If it means whatever future physics finds, the claim says almost nothing.",
     "label": "Quietism about the mind-body problem"
    }
   ]
  },
  {
   "id": "m1a",
   "section": "mind",
   "short": "What a mental state is",
   "when": {
    "q": "m1",
    "in": [
     "yes"
    ]
   },
   "text": "So what is a feeling, like pain, really?",
   "options": [
    {
     "id": "identity",
     "text": "Pain just is certain nerves firing, the way lightning just is an electric spark. Science found out what pain is, and it’s that.",
     "label": "Identity theory",
     "lead": "A brain state."
    },
    {
     "id": "function",
     "text": "Pain is whatever plays pain’s part: it’s caused by damage and makes you flinch, avoid the cause and want it to stop. Your brain does this with neurons; something else could do it with chips.",
     "note": "Like a clock: anything that keeps time is a clock, whether it uses gears, sand or a quartz crystal.",
     "label": "Functionalism",
     "lead": "What it does, not what it’s made of."
    },
    {
     "id": "folk",
     "lead": "Our everyday words for the mind are wrong.",
     "text": "Talk of “beliefs” and “desires” is an old, rough theory. Brain science will replace it, the way chemistry replaced talk of “phlogiston.”",
     "note": "People once explained burning by a substance called phlogiston that fire released. It turned out there’s no such thing.",
     "label": "Eliminativism"
    },
    {
     "id": "elim",
     "lead": "The inner glow is a trick of the brain.",
     "text": "Your brain tells you there’s a private inner feeling on top of everything it does. There isn’t; that sense of an inner glow is the brain describing itself wrongly.",
     "note": "This doesn’t deny that stubbing your toe hurts; it denies that the hurt is an extra inner quality over and above what the brain does.",
     "label": "Illusionism"
    },
    {
     "id": "mystery",
     "lead": "Something physical, but we may never understand how.",
     "text": "The brain produces experience somehow, but human minds may simply not be built to grasp the link.",
     "note": "As a dog can’t understand algebra, however long it tries.",
     "label": "Mysterianism"
    }
   ],
   "torn": true
  },
  {
   "id": "m1b",
   "section": "mind",
   "short": "What isn’t physical",
   "when": {
    "q": "m1",
    "in": [
     "no"
    ]
   },
   "text": "What isn’t physical?",
   "options": [
    {
     "id": "propdual",
     "text": "Your brain is physical, but what pain or chocolate feels like from the inside is an extra, non-physical feature that the brain gives rise to.",
     "label": "Property dualism",
     "lead": "How things feel."
    },
    {
     "id": "soul",
     "text": "You are, or have, a non-physical thing that thinks and feels, separate from your body and able in principle to exist without it.",
     "label": "Substance dualism",
     "lead": "A soul."
    },
    {
     "id": "form",
     "text": "The soul is what makes your body a living, thinking human, as a shape makes clay a statue. It isn’t a second thing inside you.",
     "note": "Aristotle’s view, developed by Aquinas, who held that the thinking part of the soul can survive death.",
     "label": "Hylomorphism",
     "lead": "A soul, but not a separate thing."
    },
    {
     "id": "panpsych",
     "text": "Tiny glimmers of experience exist even in atoms. A brain gathers them into a mind.",
     "label": "Panpsychism",
     "lead": "Something in all matter."
    },
    {
     "id": "idealism",
     "text": "The world itself is made of experience. Tables and stars are things minds experience, not stuff that exists on its own.",
     "label": "Idealism",
     "lead": "Everything is."
    },
    {
     "id": "neutral",
     "text": "Both are two sides of one deeper kind of stuff.",
     "note": "When you stub your toe, a scientist sees nerves firing and you feel pain. Neutral monists say these are one event, seen from outside and felt from inside, and neither description is more basic.",
     "label": "Neutral monism",
     "lead": "Neither mind nor matter comes first."
    }
   ]
  },
  {
   "id": "m1c",
   "section": "mind",
   "short": "Does experience cause?",
   "when": {
    "q": "m1b",
    "in": [
     "propdual",
     "soul",
     "form"
    ]
   },
   "text": "Do your feelings ever make anything happen, or do they just ride along?",
   "note": "The classic puzzle for anyone who says the mind isn’t physical: how can something non-physical push atoms around?",
   "options": [
    {
     "id": "interact",
     "text": "Feeling pain is part of why you pull your hand away.",
     "label": "Interactionism",
     "lead": "They make things happen."
    },
    {
     "id": "epiphen",
     "text": "Like a shadow following you: it moves when you move but never pushes anything. The brain does all the work.",
     "note": "Touch a hot stove and your hand jerks away before you even feel the burn. Maybe the feeling never caused anything at all.",
     "label": "Epiphenomenalism",
     "lead": "They just ride along."
    },
    {
     "id": "parallel",
     "lead": "Neither causes the other.",
     "text": "Mind and body run in step, like two clocks set to the same time, without either one pushing the other.",
     "note": "Leibniz’s view. Al-Ghazali and Malebranche held a related one: God makes them match, moment by moment.",
     "label": "Parallelism"
    }
   ]
  },
  {
   "id": "m1d",
   "section": "mind",
   "short": "Zombies",
   "when": {
    "q": "m1",
    "in": [
     "yes"
    ]
   },
   "text": "Could there be, at least in some possible universe, a being exactly like you, atom for atom, that acts just like you but feels nothing at all?",
   "note": "Not asking whether our laws of nature allow it. Philosophers call this a “zombie”: not the movie kind, just a perfect physical copy that feels nothing.",
   "hint": "Your zombie twin winces when it stubs its toe, says “ouch, that hurts,” and writes poems about sunsets. But there is nothing it is like to be it: no pain, no colour, no feeling. Can that story even make sense?",
   "options": [
    {
     "id": "incoherent",
     "lead": "No, the story doesn’t make sense.",
     "text": "If every atom does exactly what yours do, the feeling is there too. Doing all that just is feeling.",
     "label": "Zombies inconceivable"
    },
    {
     "id": "imaginable",
     "lead": "You can imagine it, but it couldn’t happen.",
     "text": "Not in any universe. Being able to picture something doesn’t show it’s really possible.",
     "note": "You can imagine water not being H₂O, but water couldn’t be anything else.",
     "label": "Conceivable but impossible"
    },
    {
     "id": "possible",
     "lead": "Yes, it could happen.",
     "text": "Nothing about atoms by themselves guarantees there’s a feeling inside. The feeling is something extra.",
     "note": "In our universe, a law of nature may still always link the two.",
     "label": "Zombies possible"
    }
   ]
  },
  {
   "id": "m6",
   "section": "mind",
   "short": "Machine minds",
   "text": "Could a machine ever have a real mind: actually understand and feel, not just act as if it does?",
   "note": "Not just today’s chatbots: any machine we might ever build.",
   "hint": "A man who knows no Chinese sits in a room with a huge rulebook. Notes in Chinese come in; he looks up the squiggles and copies out the squiggles the book says to send back. Outside, people think they are chatting with a fluent speaker. Does anything in that room understand Chinese? A computer running a program does what the man does, only faster.",
   "options": [
    {
     "id": "program",
     "lead": "Yes, with the right program.",
     "text": "A mind is a way of handling information. Run the right program and you get a mind, whether it runs on neurons or chips.",
     "note": "In the Chinese room, the whole system understands, even if the man doesn’t.",
     "label": "Computational functionalism"
    },
    {
     "id": "split",
     "lead": "It could think, but not feel.",
     "text": "It could really understand and solve problems, but there would be nothing it feels like to be it.",
     "label": "Understanding without consciousness"
    },
    {
     "id": "stuff",
     "lead": "Only if it’s built from the right stuff.",
     "text": "A program alone just shuffles symbols. A machine would need the physical powers that brains have, not just a copy of what they compute.",
     "note": "A brain is itself a kind of machine.",
     "label": "Biological naturalism"
    },
    {
     "id": "never",
     "lead": "No, never.",
     "text": "Minds need something no built thing can have, such as being alive or having a soul.",
     "label": "No machine minds"
    },
    {
     "id": "unknown",
     "lead": "We could never tell.",
     "text": "However it behaves, we have no test for whether anything is understood or felt inside.",
     "label": "Agnosticism about machine minds"
    }
   ]
  },
  {
   "id": "m2",
   "section": "mind",
   "short": "Is there a self?",
   "text": "Is there a single, real “you,” or only a flow of thoughts and feelings with no one in particular there?",
   "hint": "Ten years ago you had different cells, beliefs, tastes and friends. Is there one thing that was there then and is still here now? If so, what?",
   "options": [
    {
     "id": "yes",
     "text": "There is one person who was there ten years ago and is still here now.",
     "label": "A self",
     "lead": "A real you."
    },
    {
     "id": "no",
     "text": "Thoughts and feelings come and go, but there’s no one extra thing that has them all.",
     "label": "No single self",
     "lead": "Only the flow."
    }
   ]
  },
  {
   "id": "m2a",
   "section": "mind",
   "short": "What the self is",
   "when": {
    "q": "m2",
    "in": [
     "yes"
    ]
   },
   "text": "Then what is the real you?",
   "options": [
    {
     "id": "simple",
     "text": "One simple thing inside you that does your thinking, feeling and choosing, and has no parts.",
     "label": "Simple self",
     "lead": "A soul-like core."
    },
    {
     "id": "person",
     "text": "You are this person, body and brain together. There’s no extra thing hiding inside.",
     "label": "Self as person or animal",
     "lead": "The living human being."
    },
    {
     "id": "story",
     "text": "The self is real, but it’s made by the story that links your past, your choices and your plans.",
     "label": "Narrative self",
     "lead": "Your life story."
    },
    {
     "id": "witness",
     "text": "Not your body, thoughts or personality, but the silent awareness they all appear in. It never changes and doesn’t think or choose; it only watches.",
     "note": "The Hindu Advaita tradition calls it Ātman and holds there is really only one, identical with Brahman, the whole of reality. (Sāṃkhya and Yoga accept a similar witness, but one for each person.)",
     "label": "Witness self",
     "lead": "Pure awareness."
    }
   ]
  },
  {
   "id": "m2b",
   "section": "mind",
   "short": "What’s there instead",
   "when": {
    "q": "m2",
    "in": [
     "no"
    ]
   },
   "text": "Then what’s there?",
   "options": [
    {
     "id": "bundle",
     "text": "Thoughts, feelings and memories, loosely held together. That’s all a self ever was.",
     "note": "Hume looked inside himself and found only feelings and thoughts, never a “self” having them.",
     "label": "Bundle theory",
     "lead": "A bundle of experiences."
    },
    {
     "id": "conv",
     "text": "“I” is a handy name for body, feelings and thoughts, as “car” is for wheels, engine and frame. Clinging to it as something more causes suffering.",
     "note": "The Buddhist teaching of anattā, “not-self.” Pick this if the point about suffering is part of your view; otherwise “bundle” is closer.",
     "label": "Buddhist no-self",
     "lead": "A changing stream, as the Buddha taught."
    },
    {
     "id": "noself",
     "text": "The brain draws a picture of a “me” inside, and you can’t see that it’s only a picture.",
     "label": "Self-model illusion",
     "lead": "A picture of a self."
    }
   ]
  },
  {
   "id": "m4",
   "section": "mind",
   "short": "The teleporter",
   "text": "A machine scans your body, destroys the original, and builds a perfect copy on Mars with all your memories. The person on Mars is…",
   "hint": "The person on Mars remembers your childhood, loves your friends, and would sign your name exactly as you do. Is that enough, or does it have to be the same body?",
   "options": [
    {
     "id": "you",
     "text": "Same memories, same personality: you just travelled very fast.",
     "label": "Psychological continuity",
     "lead": "You."
    },
    {
     "id": "someone",
     "text": "You died, and a perfect twin was made who thinks they’re you.",
     "label": "Bodily or soul view",
     "lead": "Someone else."
    },
    {
     "id": "nofact",
     "text": "We know exactly what happened. “Is it you?” is only a question about how to use the word “you.”",
     "label": "Reductionism",
     "lead": "There’s no right answer."
    }
   ]
  },
  {
   "id": "m4a",
   "section": "mind",
   "short": "Two copies",
   "when": {
    "q": "m4",
    "in": [
     "you"
    ]
   },
   "text": "The machine malfunctions and makes two copies, one on Mars and one on Venus. Which one is you?",
   "options": [
    {
     "id": "both",
     "text": "You are now in two places, living two lives from here on.",
     "label": "Multiple occupancy",
     "lead": "Both."
    },
    {
     "id": "neither",
     "text": "One person can’t become two, and neither copy has a better claim, so you didn’t survive.",
     "label": "Non-branching view",
     "lead": "Neither."
    },
    {
     "id": "nomatter",
     "text": "There’s no fact about which one is you, and that’s fine. Everything you care about, your memories, plans and loves, carries on in both.",
     "label": "What matters isn’t identity",
     "lead": "It doesn’t matter."
    }
   ]
  },
  {
   "id": "m4b",
   "section": "mind",
   "short": "What keeps you you",
   "when": {
    "q": "m4",
    "in": [
     "someone"
    ]
   },
   "text": "Then what makes you the same person over time?",
   "options": [
    {
     "id": "body",
     "text": "You are a human animal. Wherever this living body goes, you go, even if you lost all your memories.",
     "label": "Animalism",
     "lead": "The same body."
    },
    {
     "id": "brain",
     "text": "If your brain were moved into another body, you would go with it.",
     "label": "Brain view",
     "lead": "The same brain."
    },
    {
     "id": "soul",
     "text": "A soul you can’t see or scan, which a machine could never copy.",
     "label": "Soul view",
     "lead": "The same soul."
    }
   ]
  },
  {
   "id": "m3",
   "section": "mind",
   "short": "Free will",
   "text": "Rewind time to just before you chose tea over coffee this morning: every atom and every thought exactly as it was. Do you have free will?",
   "note": "Free will here means the kind of control that could make you deserve praise or blame for what you choose.",
   "options": [
    {
     "id": "libert",
     "lead": "Yes, and the replay could come out differently.",
     "text": "Free will needs that: nothing before the moment of choice fixes what you do, and that’s how it is.",
     "note": "This is called libertarianism, but it isn’t the political view of the same name.",
     "label": "Libertarianism"
    },
    {
     "id": "compat",
     "lead": "Yes, even if the replay always comes out the same.",
     "text": "A choice is free when it comes from your own reasons and values, with no one forcing you. Being predictable doesn’t make it unfree.",
     "label": "Compatibilism"
    },
    {
     "id": "unsure",
     "lead": "Not sure.",
     "text": "Free will would need the replay to be able to come out differently, and I can’t tell whether it can.",
     "label": "Agnostic incompatibilism",
     "note": "If you’re unsure whether openness even matters, pick the answer you lean toward and use the follow-ups."
    },
    {
     "id": "no",
     "lead": "No.",
     "text": "However the replay turns out, none of us has the kind of control that makes us deserve praise or blame.",
     "label": "No free will"
    }
   ]
  },
  {
   "id": "m3b",
   "section": "mind",
   "short": "What settles the choice",
   "when": {
    "q": "m3",
    "in": [
     "libert"
    ]
   },
   "text": "If nothing beforehand settles your choice, what does?",
   "options": [
    {
     "id": "agent",
     "text": "You, the person, start the choice yourself. It isn’t one brain event causing the next; you are the cause.",
     "label": "Agent causation",
     "lead": "You do, directly."
    },
    {
     "id": "event",
     "text": "In your brain the outcome stays open until the last moment, and your effort and reasons are what tip it one way.",
     "label": "Event-causal libertarianism",
     "lead": "Your reasons and effort, with real chance."
    },
    {
     "id": "noncausal",
     "lead": "Nothing causes it.",
     "text": "A choice isn’t pushed by anything, not even by you. You simply choose, for your reasons.",
     "label": "Non-causal libertarianism"
    }
   ]
  },
  {
   "id": "m3c",
   "section": "mind",
   "short": "What makes a choice yours",
   "when": {
    "q": "m3",
    "in": [
     "compat"
    ]
   },
   "text": "What makes a choice truly yours?",
   "options": [
    {
     "id": "classic",
     "text": "You do what you want to do. Free means not locked up, threatened or pushed.",
     "label": "Classical compatibilism",
     "lead": "No one forces you."
    },
    {
     "id": "hier",
     "text": "You act on a desire you’re glad to have. A smoker who wishes he didn’t crave cigarettes isn’t choosing freely when he lights up.",
     "label": "Hierarchical view",
     "lead": "You approve of what drives you."
    },
    {
     "id": "reasons",
     "text": "It comes from your own reasoning, and you’d change your mind if there were a good reason to.",
     "note": "If you learned the coffee was poisoned, you’d switch.",
     "label": "Reasons-responsiveness",
     "lead": "You’d change course for a good reason."
    }
   ],
   "note": "Ash‘arite Muslim theologians gave their own answer: God creates every act, yet the act is yours because you “acquire” it by choosing it."
  },
  {
   "id": "m3f",
   "section": "mind",
   "short": "Why no free will",
   "when": {
    "q": "m3",
    "in": [
     "no"
    ]
   },
   "torn": true,
   "text": "What rules free will out?",
   "options": [
    {
     "id": "determ",
     "lead": "Everything is caused.",
     "text": "Every choice comes from earlier events reaching back to before you were born. It was never up to you.",
     "label": "Hard determinism"
    },
    {
     "id": "luck",
     "lead": "Causes or chance: neither is you.",
     "text": "If your choice was fixed in advance, it wasn’t up to you. If it wasn’t fixed, it was random, which isn’t up to you either.",
     "label": "Hard incompatibilism"
    },
    {
     "id": "selfmade",
     "lead": "You can’t make yourself.",
     "text": "You choose from who you are. To deserve the credit, you’d have to have chosen who you are, which needs an earlier you, and so on forever.",
     "label": "Basic Argument"
    },
    {
     "id": "science",
     "lead": "Brain science shows it.",
     "text": "Brain scans can show a decision building up before you feel you’ve made it. The feeling of choosing comes after.",
     "note": "From experiments by Benjamin Libet and others. What they really show is still argued over.",
     "label": "Scientific skepticism"
    }
   ]
  },
  {
   "id": "m3d",
   "section": "mind",
   "short": "Deserved blame?",
   "when": {
    "q": "m3",
    "in": [
     "no"
    ]
   },
   "text": "If no one deserves blame, what should we do instead?",
   "options": [
    {
     "id": "quarantine",
     "lead": "Protect people, like a quarantine.",
     "text": "Keep dangerous people away from others only as much as safety needs, the way we isolate someone with a disease, without blaming them.",
     "label": "Quarantine model"
    },
    {
     "id": "answer",
     "lead": "Hold people to account, looking ahead.",
     "text": "Ask them to explain themselves, repair the harm and do better, without saying they deserve to suffer.",
     "label": "Forward-looking blame"
    },
    {
     "id": "abolish",
     "lead": "Drop blame altogether.",
     "text": "Treat wrongdoing as a problem to fix, like a broken bridge, not a fault to hold against anyone.",
     "label": "Responsibility abolitionism"
    },
    {
     "id": "illusion",
     "lead": "Keep the belief alive.",
     "text": "No one truly deserves blame, but society works better if most people go on believing they do.",
     "label": "Illusionism about free will"
    }
   ]
  },
  {
   "id": "m3e",
   "section": "mind",
   "short": "The hidden device",
   "when": {
    "q": "m3",
    "in": [
     "libert",
     "compat",
     "unsure",
     "no"
    ]
   },
   "text": "A scientist secretly wires your brain. If you were about to vote for Ana, the device would switch you to Ben. You choose Ben on your own, for your own reasons, and the device never does anything. Does the device, just by being there, make you any less responsible than you’d otherwise be?",
   "note": "If you think no one is ever truly responsible, answer about whether the device makes any difference.",
   "options": [
    {
     "id": "yes",
     "lead": "No, I’m just as responsible.",
     "text": "The device did nothing. What counts is how I actually chose, not whether I could have chosen otherwise.",
     "label": "Source view"
    },
    {
     "id": "no",
     "lead": "Yes, less responsible.",
     "text": "I could never have ended up voting for Ana, so I’m not really responsible for voting for Ben.",
     "label": "Leeway view"
    },
    {
     "id": "dilemma",
     "lead": "The story can’t work.",
     "text": "If my choice isn’t settled until I make it, the device couldn’t know in advance which way I was about to go.",
     "label": "Dilemma defence"
    }
   ]
  },
  {
   "id": "m5",
   "section": "mind",
   "short": "Responsible for yourself?",
   "when": {
    "q": "m3",
    "in": [
     "libert",
     "compat",
     "unsure"
    ]
   },
   "text": "You didn’t choose your genes or your upbringing. Can you still deserve praise or blame for the person you’ve become?",
   "options": [
    {
     "id": "make",
     "text": "You didn’t pick your starting cards, but you’re responsible for how you play them.",
     "label": "Self-making",
     "lead": "Yes: it’s what you do with it."
    },
    {
     "id": "own",
     "text": "How you came to be this way doesn’t matter. What counts is that these values really are yours today.",
     "label": "Ownership view",
     "lead": "Yes: they’re your values now."
    },
    {
     "id": "practice",
     "text": "Feeling hurt, grateful or forgiving toward each other is part of every human relationship. No theory about causes could talk us out of it.",
     "label": "Reactive attitudes view",
     "lead": "Yes: it’s part of being human."
    },
    {
     "id": "noult",
     "text": "You can’t truly deserve credit or blame for a self you didn’t create, and no one creates themselves.",
     "label": "No ultimate responsibility",
     "lead": "No."
    },
    {
     "id": "nothing",
     "text": "Praise and blame are fair when they help shape who you’ll become, not because of some deeper fact about you.",
     "label": "Forward-looking responsibility",
     "lead": "Yes, but only looking forward."
    }
   ]
  },
  {
   "id": "k4",
   "section": "reality",
   "short": "Knowing the world",
   "text": "Can you be sure you’re not dreaming right now? Do you **know** that you have hands?",
   "hint": "In a perfect dream, or a perfect computer simulation, everything would look and feel exactly as it does now. The Chinese philosopher Zhuangzi dreamed he was a butterfly. When he woke, he wasn’t sure: was he a man who had dreamed of being a butterfly, or a butterfly now dreaming it was a man?",
   "options": [
    {
     "id": "yes",
     "text": "I know I have hands.",
     "label": "Anti-skepticism",
     "lead": "Yes."
    },
    {
     "id": "no",
     "text": "I can’t rule out that I’m dreaming or in a simulation, so I don’t really know.",
     "label": "Skepticism",
     "lead": "No."
    },
    {
     "id": "pointless",
     "text": "If no test could ever tell a perfect dream from real life, there’s no real difference between them to worry about.",
     "label": "Verificationism",
     "lead": "The question makes no sense."
    }
   ]
  },
  {
   "id": "k4a",
   "section": "reality",
   "short": "How you know",
   "text": "How can you know, when a perfect dream would feel exactly the same?",
   "when": {
    "q": "k4",
    "in": [
     "yes"
    ]
   },
   "options": [
    {
     "id": "fallib",
     "text": "My eyes and hands do in fact work, and that’s enough for knowing, even if I can’t prove it to a doubter.",
     "note": "You know where you live without being able to prove it to a skeptic.",
     "label": "Fallibilist externalism",
     "lead": "I don’t need proof."
    },
    {
     "id": "common",
     "text": "I’m more sure I have hands than I could ever be of any clever argument that I don’t.",
     "label": "Common sense",
     "lead": "Common sense wins."
    },
    {
     "id": "hinge",
     "lead": "It’s the ground I stand on.",
     "text": "“I have hands” isn’t something I found out. It’s a background certainty that all my knowing and doubting rest on, so asking for proof misunderstands it.",
     "note": "Wittgenstein: doubting has to stop somewhere, or it isn’t doubting anything.",
     "label": "Hinge epistemology"
    },
    {
     "id": "pragma",
     "lead": "The worry changes nothing.",
     "text": "Knowing is for living. For everything I actually do, my hands are as real as anything gets, and a doubt that changes nothing isn’t a real doubt.",
     "note": "Charles Peirce: “Let us not pretend to doubt in philosophy what we do not doubt in our hearts.”",
     "label": "Pragmatic response"
    },
    {
     "id": "abduct",
     "text": "Dreams are patchy and jumbled; waking life fits together day after day. A real world is by far the best explanation of that.",
     "label": "Inference to the best explanation",
     "lead": "A real world explains it best."
    },
    {
     "id": "proof",
     "lead": "I can prove it.",
     "text": "A good argument rules the dream out, for example that a perfect God wouldn’t let me be fooled about everything.",
     "note": "Descartes appealed to a God who doesn’t deceive. Hilary Putnam and Kant gave other arguments of this kind.",
     "label": "Anti-skeptical argument"
    },
    {
     "id": "context",
     "text": "In everyday talk, yes, I know. Once someone seriously raises the dream possibility, the bar for “knowing” goes up and I no longer meet it.",
     "label": "Contextualism",
     "note": "“I know I locked the door” is fine with a friend; in a courtroom, the same evidence may not count as knowing.",
     "lead": "It depends how strict we’re being."
    },
    {
     "id": "struct",
     "text": "If I’m in a simulation, my hands still exist; they’re just made of computer code instead of atoms.",
     "label": "Simulation realism",
     "lead": "Even a simulation is real."
    },
    {
     "id": "ideal",
     "text": "There’s no hidden world behind my experiences for a dream to fake. My hands just are the seeing and feeling of hands.",
     "label": "Idealism",
     "note": "George Berkeley: to be is to be perceived. The Buddhist philosopher Vasubandhu used dreams themselves as his argument: a dream shows that vivid, shared-seeming experience needs no outside objects.",
     "lead": "The world is made of experiences."
    }
   ]
  },
  {
   "id": "k4b",
   "section": "reality",
   "short": "Stop believing?",
   "text": "So should you stop believing things about the world?",
   "when": {
    "q": "k4",
    "in": [
     "no"
    ]
   },
   "options": [
    {
     "id": "pyrrho",
     "text": "Suspend judgment: stop taking sides on how things really are, go by how they seem, and you’ll find peace of mind.",
     "label": "Pyrrhonism",
     "lead": "Yes, and it’s freeing."
    },
    {
     "id": "academic",
     "text": "Believe what’s more likely, but never call it knowledge.",
     "label": "Academic skepticism",
     "lead": "No, just hold beliefs loosely."
    },
    {
     "id": "natural",
     "text": "Human nature makes us believe anyway. The doubts fade as soon as we stop philosophising and get on with life.",
     "note": "Hume found his doubts vanished once he left his study and played games with friends.",
     "label": "Natural belief",
     "lead": "We can’t help believing."
    }
   ]
  },
  {
   "id": "k11",
   "section": "reality",
   "short": "What knowing is",
   "text": "You glance at the kitchen clock, which has always been right. It says 2:00, and it really is 2:00. But the clock actually stopped at 2:00 last night; you just happened to look at exactly the right moment. Did you **know** it was 2:00?",
   "note": "You had a true belief and a good reason for it. Is that enough to count as knowing? (Bertrand Russell’s example, 1948.)",
   "hint": "A similar case is about 1,250 years old. The Indian philosopher Dharmottara imagined a traveller who sees a mirage and believes there is water ahead. There is water there, hidden under a rock. Did he know?",
   "options": [
    {
     "id": "jtb",
     "lead": "Yes.",
     "text": "You believed it, it was true, and you had a good reason: a clock that has always worked. That’s all knowing is.",
     "note": "Some philosophers say our gut reaction here is simply wrong.",
     "label": "Justified true belief"
    },
    {
     "id": "track",
     "lead": "No, you’d have believed it anyway.",
     "text": "Look a minute later and you’d still think “2:00.” Real knowing has to follow the truth: you wouldn’t believe it if it were false.",
     "note": "Robert Nozick’s test. A close cousin asks whether you could easily have been wrong. Alvin Goldman’s view lands here too: a stopped clock isn’t a reliable source.",
     "label": "Truth-tracking (sensitivity or safety)"
    },
    {
     "id": "defeat",
     "lead": "No, your reason was based on something false.",
     "text": "You assumed the clock was working, and it wasn’t. Knowing needs reasons that don’t depend on anything false.",
     "label": "No-false-lemma"
    },
    {
     "id": "virtue",
     "lead": "No, it wasn’t your skill.",
     "text": "You read the clock well, but its being right was pure luck. Knowing means getting it right because of your own ability.",
     "note": "An archer’s bullseye isn’t to her credit if a gust of wind carried the arrow there.",
     "label": "Virtue epistemology"
    },
    {
     "id": "infall",
     "lead": "No, you could have been wrong.",
     "text": "Knowing needs reasons that make it impossible to be wrong, and a clock can always fail.",
     "note": "Descartes looked for knowledge of this kind.",
     "label": "Infallibilism"
    },
    {
     "id": "basic",
     "lead": "No, and there’s no recipe.",
     "text": "Knowing isn’t belief plus some extra ingredients. It’s its own basic state of mind, like seeing that something is so.",
     "label": "Knowledge-first",
     "note": "Philosophers spent decades trying to add the missing ingredient, and every recipe met a counterexample like this one. Timothy Williamson concluded there is no recipe to find."
    }
   ]
  },
  {
   "id": "k3",
   "section": "reality",
   "short": "Reason or experience?",
   "text": "Can you learn facts about the world just by thinking, without looking?",
   "options": [
    {
     "id": "rational",
     "text": "Some important facts can be worked out by pure reasoning, without checking.",
     "note": "You can know that nothing is red all over and green all over at the same time, or that if Ann is taller than Ben and Ben is taller than Cara then Ann is taller than Cara, without checking any cases.",
     "label": "Rationalism",
     "lead": "Yes, some."
    },
    {
     "id": "empiric",
     "text": "Every fact about the world comes from experience: seeing, hearing, measuring.",
     "note": "Even “2 + 2 = 4” is either just about our definitions, or learned from experience after all.",
     "label": "Empiricism",
     "lead": "No."
    },
    {
     "id": "kant",
     "text": "Our minds come with built-in ways of organising experience, like space, time, and cause and effect. Experience fills in the details.",
     "note": "Try to imagine an event with no cause, or an object that isn’t anywhere in space. Kant said this is hard because your mind supplies these frames before any experience arrives.",
     "label": "Kantian view",
     "lead": "Both work together."
    }
   ]
  },
  {
   "id": "k13",
   "section": "reality",
   "short": "What truth is",
   "text": "What makes a sentence true?",
   "hint": "“Paris is in France,” “7 + 5 = 12,” “Torture is wrong.” Is it the same kind of thing that makes each of these true?",
   "options": [
    {
     "id": "corresp",
     "lead": "That it matches a fact.",
     "text": "“Snow is white” is true because snow really is white. The world makes statements true or false.",
     "label": "Correspondence"
    },
    {
     "id": "cohere",
     "lead": "That it fits the whole system.",
     "text": "A belief is true when it fits with all the others into one consistent picture. Truth is about how beliefs hang together, not about something outside them.",
     "label": "Coherence"
    },
    {
     "id": "pragma",
     "lead": "That it holds up.",
     "text": "True beliefs are the ones that work, and would keep working however much more we investigated.",
     "label": "Pragmatist theory of truth"
    },
    {
     "id": "deflate",
     "lead": "Nothing extra.",
     "text": "“It’s true that snow is white” says no more than “snow is white.” “True” is just a handy word for agreeing (“that’s true”) or summing up (“everything she said is true”).",
     "label": "Deflationism about truth"
    },
    {
     "id": "plural",
     "lead": "It depends on the subject.",
     "text": "For “snow is white,” matching the world. For maths or morals, something else, like proof or fitting together.",
     "label": "Truth pluralism"
    }
   ],
   "note": "Not how we find out whether it’s true, but what its being true is."
  },
  {
   "id": "k1",
   "section": "reality",
   "short": "Science and truth",
   "text": "When science talks about things no one can see, like electrons or black holes, is it describing what’s really there?",
   "hint": "Many successful theories later turned out false: the “ether” that light was thought to travel through, or “phlogiston,” a substance once thought to be released by fire. Should we expect today’s theories to do better?",
   "options": [
    {
     "id": "true",
     "lead": "Yes, roughly.",
     "text": "Electrons and black holes really exist, much as science describes them. Our best theories are close to the truth.",
     "label": "Scientific realism"
    },
    {
     "id": "selective",
     "lead": "Partly.",
     "text": "The parts that keep passing tests, like the equations, are right. The bigger picture of what’s behind them may change, as it has before.",
     "note": "Newton’s equations survived inside Einstein’s theory even though Newton’s picture of space didn’t.",
     "label": "Selective realism"
    },
    {
     "id": "tools",
     "lead": "Not necessarily.",
     "text": "Theories are tools that predict what we see, and they work. Whether the unseen things they talk about really exist is another matter.",
     "note": "Engineers still use Newton’s laws to send rockets to the Moon, though we know those laws aren’t strictly true.",
     "label": "Anti-realism"
    }
   ]
  },
  {
   "id": "k1b",
   "section": "reality",
   "short": "What science aims at",
   "text": "Then what is science doing, if not describing a hidden reality?",
   "when": {
    "q": "k1",
    "in": [
     "tools"
    ]
   },
   "options": [
    {
     "id": "instrument",
     "text": "Theories are tools for predicting and controlling things. Talk of electrons is a way of calculating, not a description of anything.",
     "label": "Instrumentalism",
     "lead": "Making useful tools."
    },
    {
     "id": "empirical",
     "text": "A theory may or may not be right about unseen things; all science needs is that it fits what we can observe.",
     "label": "Constructive empiricism",
     "lead": "Getting what we can see right."
    },
    {
     "id": "pragmatic",
     "text": "Good theories are the ones that keep working as research goes on. That’s all “getting it right” ever meant.",
     "label": "Pragmatism",
     "lead": "Finding what keeps working."
    },
    {
     "id": "framework",
     "text": "Each era’s science sees the world through its own framework, and there’s no neutral way to say which one matches reality.",
     "note": "Thomas Kuhn argued that before and after Einstein, scientists didn’t just disagree about answers; they meant different things by “mass” and “time.”",
     "label": "Framework relativism",
     "lead": "Seeing through its era’s lens."
    }
   ]
  },
  {
   "id": "k2",
   "section": "reality",
   "short": "What numbers are",
   "text": "Do numbers exist on their own, even if there were no people and no things to count?",
   "hint": "If every mind vanished, and every physical thing too, would it still be true that 2 + 2 = 4, and that there are infinitely many prime numbers? Would there still be something for those truths to be about?",
   "options": [
    {
     "id": "yes",
     "text": "Numbers exist outside space and time, and mathematicians discover facts about them, the way explorers discover a mountain.",
     "note": "Euclid proved over 2,000 years ago that the prime numbers never run out. Did he discover that, or invent it?",
     "label": "Platonism",
     "lead": "Yes."
    },
    {
     "id": "no",
     "text": "Numbers don’t exist as things of their own.",
     "label": "Anti-Platonism",
     "lead": "No."
    }
   ]
  },
  {
   "id": "k2a",
   "section": "reality",
   "short": "Knowing numbers",
   "text": "We can’t see or touch numbers. How do we know about them?",
   "when": {
    "q": "k2",
    "in": [
     "yes"
    ]
   },
   "options": [
    {
     "id": "intuition",
     "text": "Think it through and you can simply see that 2 + 2 must be 4, as directly as you see a colour.",
     "label": "Mathematical intuition",
     "lead": "We see it with the mind."
    },
    {
     "id": "logic",
     "text": "Once you understand what “number” means, the truths follow by pure reasoning.",
     "label": "Logicism",
     "lead": "Through logic."
    },
    {
     "id": "indisp",
     "text": "We accept numbers because physics and every other science can’t work without them.",
     "label": "Indispensability argument",
     "lead": "Science needs them."
    }
   ]
  },
  {
   "id": "k2b",
   "section": "reality",
   "short": "Then what numbers are",
   "text": "Then what are numbers, or what is maths about?",
   "when": {
    "q": "k2",
    "in": [
     "no"
    ]
   },
   "options": [
    {
     "id": "empiric",
     "text": "Like how many apples are in a bowl, or how round a plate is. Maths studies those patterns.",
     "label": "Aristotelian realism",
     "lead": "Patterns in real things."
    },
    {
     "id": "construct",
     "text": "A number exists only once it could be built step by step in thought.",
     "label": "Intuitionism",
     "lead": "Things our minds build."
    },
    {
     "id": "mixed",
     "text": "We invented the rules, then discover what follows, the way chess’s rules were invented but its best strategies are found.",
     "label": "Invented frameworks",
     "lead": "Invented rules, discovered results."
    },
    {
     "id": "formal",
     "text": "Maths is entirely invented: moving symbols by rules, with no deeper truth behind it.",
     "label": "Formalism",
     "lead": "A game with symbols."
    },
    {
     "id": "fiction",
     "text": "“2 + 2 = 4” is true within the story of maths, the way “Sherlock Holmes lives on Baker Street” is true in the stories.",
     "label": "Fictionalism",
     "lead": "A useful story."
    }
   ]
  },
  {
   "id": "k12",
   "section": "reality",
   "short": "Parts and wholes",
   "text": "When do several things make up one more thing?",
   "hint": "Take a chair apart and lay the pieces on the floor. Is the chair still there? Now glue them back. When did the chair start existing again?",
   "options": [
    {
     "id": "universal",
     "lead": "Always.",
     "text": "Any things at all make up a whole, even your boot plus the Eiffel Tower. Most such wholes just aren’t worth naming.",
     "label": "Universalism"
    },
    {
     "id": "ordinary",
     "lead": "Only for ordinary objects.",
     "text": "Bricks snapped together make a house, and parts make a chair or a cat. But a boot plus a tower is not one thing.",
     "label": "Common-sense restricted composition"
    },
    {
     "id": "organic",
     "lead": "Only when they make up something living.",
     "text": "The particles in a cat make up a real cat. But strictly there are no Lego houses or chairs, just particles arranged that way.",
     "label": "Organicism"
    },
    {
     "id": "nihil",
     "lead": "Never.",
     "text": "Strictly there are no houses, chairs or noses, only tiny particles arranged house-wise, chair-wise and nose-wise. The names are just handy labels.",
     "note": "Buddhist texts make this point about a chariot: “chariot” is just a name for parts put together.",
     "label": "Mereological nihilism"
    },
    {
     "id": "monism",
     "lead": "Only the whole universe is truly one thing.",
     "text": "Your boot and the Tower aren’t building blocks of anything; they’re just parts of the one universe.",
     "note": "Parmenides, Spinoza and Advaita Vedānta hold that reality is ultimately one. Some philosophers today say the universe is the one basic object, and its parts depend on it.",
     "label": "Monism"
    },
    {
     "id": "verbal",
     "lead": "There’s no real question here.",
     "text": "It just depends on how we choose to use the word “thing.”",
     "label": "Ontological deflationism"
    }
   ],
   "note": "Snap ten Lego bricks into a house. Is there now an extra thing, the house, or just ten bricks arranged house-wise? And if bricks can make a house, can your left boot and the Eiffel Tower make one thing too?"
  },
  {
   "id": "k7",
   "section": "reality",
   "short": "Is the future real?",
   "text": "Is the past still real? Is the future already real?",
   "hint": "Is your 10th birthday party still “out there” somewhere in time, the way Paris is still out there when you’re not in it? Is your 30th birthday already out there too?",
   "options": [
    {
     "id": "yes",
     "lead": "All times are equally real.",
     "text": "Past, present and future all exist, like places on a map. “Now” is just wherever in time you happen to be, the way “here” is wherever you are.",
     "note": "Einstein showed that two observers moving at different speeds can disagree about which distant events are happening “now.” If there’s no single “now,” the future may be just as real as the present.",
     "label": "Eternalism"
    },
    {
     "id": "spotlight",
     "lead": "All times are real, but “now” moves.",
     "text": "Every time exists, and a special present moment moves along them, like a spotlight.",
     "label": "Moving spotlight"
    },
    {
     "id": "growing",
     "lead": "Past and present, not the future.",
     "text": "Your 10th birthday is still part of reality; your 30th isn’t anywhere yet. Reality grows as time passes.",
     "label": "Growing block"
    },
    {
     "id": "present",
     "lead": "Only now.",
     "text": "The past is gone and the future isn’t here yet. Only the present exists.",
     "label": "Presentism",
     "note": "Augustine: the past exists now only as memory, the future only as expectation."
    },
    {
     "id": "unreal",
     "lead": "None of it.",
     "text": "Time itself is an illusion.",
     "label": "Unreality of time"
    },
    {
     "id": "verbal",
     "lead": "There’s no real disagreement here.",
     "text": "Once you pin down what “real” means, everyone agrees on the facts.",
     "label": "Deflationism about time"
    }
   ]
  },
  {
   "id": "k8",
   "section": "reality",
   "short": "Causes and laws",
   "text": "When one thing causes another, does something really make it happen?",
   "hint": "You flip a switch and the light comes on. Is there a real force at work, or just one event, then another, every time?",
   "options": [
    {
     "id": "yes",
     "text": "Something real links the cause to the effect and makes the effect happen.",
     "label": "Causal realism",
     "lead": "Yes."
    },
    {
     "id": "no",
     "text": "There’s just one event, then another. Nothing hidden connects them.",
     "label": "No hidden link",
     "lead": "No."
    }
   ]
  },
  {
   "id": "k8a",
   "section": "reality",
   "short": "The causal link",
   "text": "What is that link?",
   "when": {
    "q": "k8",
    "in": [
     "yes"
    ]
   },
   "options": [
    {
     "id": "powers",
     "text": "Causes have a real ability to produce effects, the way a magnet has a real pull.",
     "note": "Sugar has the power to dissolve, even before it touches water.",
     "label": "Powers view",
     "lead": "A power in things."
    },
    {
     "id": "process",
     "text": "Energy or motion is passed from cause to effect, as one billiard ball passes its motion to the next.",
     "label": "Process view",
     "lead": "Something passed along."
    },
    {
     "id": "necessit",
     "text": "Laws make the effect have to happen; they aren’t just patterns we noticed.",
     "label": "Necessitation",
     "lead": "Laws of nature force it."
    },
    {
     "id": "primitive",
     "text": "Making things happen is basic and can’t be explained in other terms. We feel it whenever we push or are pushed.",
     "label": "Causal primitivism",
     "lead": "Nothing simpler."
    },
    {
     "id": "god",
     "text": "God is the only real cause. Fire doesn’t burn cotton; God creates the burning whenever fire touches it.",
     "label": "Occasionalism",
     "lead": "God."
    }
   ]
  },
  {
   "id": "k8b",
   "section": "reality",
   "short": "What causation is",
   "text": "Then what makes “X caused Y” true?",
   "when": {
    "q": "k8",
    "in": [
     "no"
    ]
   },
   "options": [
    {
     "id": "regular",
     "text": "Things like Y always follow things like X. That pattern is all causing is.",
     "note": "Laws of nature, too, are just the simplest summary of what happens everywhere and always.",
     "label": "Regularity view",
     "lead": "It always happens that way."
    },
    {
     "id": "counter",
     "text": "Y depends on X: if X hadn’t happened, Y wouldn’t have either. If you hadn’t flipped the switch, the light wouldn’t be on.",
     "note": "An old formula from the Buddha’s teaching has the same shape: “When this exists, that comes to be.”",
     "label": "Counterfactual view",
     "lead": "Without X, no Y."
    },
    {
     "id": "project",
     "text": "We see one thing follow another so often that we expect it, and we call that expectation “cause.”",
     "label": "Projectivism",
     "lead": "Our minds add it."
    },
    {
     "id": "none",
     "text": "Physics describes how things change with equations. “Cause” is a leftover from everyday talk.",
     "label": "Causal eliminativism",
     "lead": "Nothing: there are no causes."
    }
   ]
  },
  {
   "id": "s7",
   "section": "society",
   "short": "The red light",
   "text": "It’s 3 a.m. The road is empty in every direction, and the light is red. Do you have any moral reason to wait, just because the law says so?",
   "note": "Set aside the risk of being caught, of being wrong about the road, or of setting a bad example. Does the law’s say-so, by itself, count for anything?",
   "options": [
    {
     "id": "yes",
     "lead": "Yes.",
     "text": "The law’s say-so gives me some reason to obey, even here.",
     "note": "It might be outweighed, but it counts.",
     "label": "Political obligation"
    },
    {
     "id": "no",
     "lead": "No.",
     "text": "A law binds me only when what it demands is right anyway. Here, waiting does no good.",
     "note": "You might still obey almost every law, because most laws demand what’s right anyway. (Philosophers call this “philosophical anarchism”; it doesn’t mean wanting to abolish the state.)",
     "label": "Philosophical anarchism"
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Nothing makes obeying or disobeying truly right or wrong.",
     "label": "Moral skepticism"
    }
   ]
  },
  {
   "id": "s7a",
   "section": "society",
   "short": "Where obedience comes from",
   "when": {
    "q": "s7",
    "in": [
     "yes"
    ]
   },
   "torn": true,
   "text": "Where does that duty to obey come from?",
   "options": [
    {
     "id": "consent",
     "lead": "Agreement.",
     "text": "By living here and accepting the law’s protection, I have agreed to follow it.",
     "note": "Socrates, in prison awaiting execution, refused to escape: he had lived under Athens’ laws all his life, and so had agreed to them.",
     "label": "Consent theory"
    },
    {
     "id": "fair",
     "lead": "Doing my share.",
     "text": "Everyone else’s obedience gives me safe roads and a peaceful society. Enjoying that while breaking the rules myself would be free-riding.",
     "label": "Fair play"
    },
    {
     "id": "justice",
     "lead": "Supporting justice.",
     "text": "Everyone has a duty to support fair laws and courts where they live, even if they never agreed to them and get nothing back from them.",
     "label": "Natural duty of justice"
    },
    {
     "id": "member",
     "lead": "Belonging.",
     "text": "Like a member of a family, I owe things to my political community that I never chose.",
     "label": "Associative obligation"
    },
    {
     "id": "mandate",
     "lead": "A higher source.",
     "text": "Rulers hold their authority from God or Heaven.",
     "note": "China’s “Mandate of Heaven” and Europe’s “divine right of kings”. Some, like Mencius, add that a tyrant loses it; others, like the defenders of the divine right of kings, say even a bad king must be obeyed.",
     "label": "Divine or Heavenly mandate"
    },
    {
     "id": "useful",
     "lead": "Results.",
     "text": "Life goes far better when people treat the law as binding than when everyone decides case by case.",
     "label": "Instrumental justification"
    }
   ]
  },
  {
   "id": "s7b",
   "section": "society",
   "short": "Without authority",
   "when": {
    "q": "s7",
    "in": [
     "no",
     "nofact"
    ]
   },
   "text": "If no state truly has authority over you, should states exist at all?",
   "options": [
    {
     "id": "keep",
     "lead": "Yes.",
     "text": "A good state can still be justified by what it does for people. It just can’t command my obedience.",
     "label": "Justified state without authority"
    },
    {
     "id": "coop",
     "lead": "No, cooperation instead.",
     "text": "Replace it with voluntary cooperation: communities and workplaces run by their members, sharing and helping each other.",
     "label": "Social anarchism",
     "note": "Kropotkin: cooperation, or “mutual aid”, does more than competition to help people survive and thrive."
    },
    {
     "id": "indiv",
     "lead": "No, free individuals instead.",
     "text": "No one should rule anyone. Free individuals can join or leave groups with others as it suits them.",
     "note": "Max Stirner imagined a “union of egoists”, each member staying only while it serves them.",
     "label": "Individualist anarchism"
    },
    {
     "id": "market",
     "lead": "No, markets instead.",
     "text": "Replace it with voluntary markets: people buy protection and the settling of disputes from competing agencies and courts, and no one is forced to pay for a service they don’t want.",
     "label": "Anarcho-capitalism"
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Whether states should exist is not a question with a true answer. States exist because people want them or are made to accept them.",
     "label": "Moral skepticism"
    }
   ]
  },
  {
   "id": "s8",
   "section": "society",
   "short": "Honest fortunes",
   "text": "Suppose everyone got what they have honestly: by working, trading, saving and receiving gifts, with no theft or fraud. Some end up very rich and some very poor. Could the result still be unjust?",
   "note": "Not whether it’s sad, or whether charity would be kind. Whether the gap itself can be a wrong.",
   "options": [
    {
     "id": "yes",
     "lead": "Yes.",
     "text": "Justice is also about how things end up: who has what, and whether that is fair.",
     "label": "Patterned justice"
    },
    {
     "id": "no",
     "lead": "No.",
     "text": "If each step was fair, the result is fair, however unequal.",
     "note": "Nozick: “Whatever arises from a just situation by just steps is itself just.”",
     "label": "Entitlement theory"
    },
    {
     "id": "rules",
     "lead": "It depends on the rules.",
     "text": "What counts as owning something “honestly” depends on rules a society makes, such as tax and inheritance law. Ask instead which rules are fair.",
     "label": "Conventionalism about property"
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Nothing makes any distribution truly just or unjust.",
     "label": "Moral skepticism"
    }
   ]
  },
  {
   "id": "s8a",
   "section": "society",
   "short": "What makes it fair",
   "when": {
    "q": "s8",
    "in": [
     "yes",
     "rules"
    ]
   },
   "torn": true,
   "text": "Then what makes a distribution (who ends up with what), or the rules behind it, just?",
   "options": [
    {
     "id": "welfare",
     "text": "Whatever makes people’s lives go best overall, giving a gain the same weight whoever gets it.",
     "label": "Utilitarian justice",
     "lead": "Best overall."
    },
    {
     "id": "prior",
     "text": "Whatever makes lives go best, giving extra weight to those who are worse off.",
     "note": "Even if two people would gain exactly the same, the gain to the one who is worse off counts for more.",
     "label": "Prioritarianism",
     "lead": "Extra weight to the worse-off."
    },
    {
     "id": "diff",
     "text": "Inequality is fair only when it makes the worst-off better off than they would otherwise be, as when higher pay for scarce skills means more jobs and services for the poorest.",
     "note": "John Rawls’s “difference principle”: the rules you would choose if you didn’t know whether you’d be born rich or poor.",
     "label": "Difference principle",
     "lead": "Gaps only if they help the worst-off."
    },
    {
     "id": "luck",
     "text": "Inequality is fair only when it comes from people’s own choices, not from luck such as talent, health or family.",
     "note": "Working longer may earn you more; being born clever or rich shouldn’t.",
     "label": "Luck egalitarianism",
     "lead": "Choices, not luck."
    },
    {
     "id": "enough",
     "text": "Everyone must have enough for a decent life; that matters far more than any gap above the line.",
     "label": "Sufficientarianism",
     "lead": "Enough for all.",
     "note": "Some say gaps above the line don’t matter at all; others, that a fairness rule applies once everyone has enough."
    },
    {
     "id": "status",
     "text": "No one should be so poor that they must bow to others, or so powerful that others must bow to them. What matters is equal standing, not equal shares.",
     "label": "Relational egalitarianism",
     "lead": "Equal standing."
    },
    {
     "id": "desert",
     "text": "Each should get what they deserve for their effort and contribution.",
     "label": "Desert-based justice",
     "lead": "What you deserve."
    },
    {
     "id": "common",
     "text": "Land and major industries should be owned in common, by the workers or the public, not by private owners who profit from others’ work.",
     "note": "Marx and Engels: communists aim to abolish private ownership of factories, land and other “means of production”, not of personal belongings. Socialists differ on who should own: the state, each firm’s workers, or local communities.",
     "label": "Socialism",
     "lead": "Common ownership."
    },
    {
     "id": "settled",
     "text": "Rules are just when they are the settled rules people have long lived by and built their plans around, applied fairly to all.",
     "note": "Hume: the rules of property are conventions that grew up because they work, and their stability matters more than their design.",
     "label": "Conventional justice",
     "lead": "The settled rules."
    }
   ]
  },
  {
   "id": "s8b",
   "section": "society",
   "short": "The poor child",
   "when": {
    "q": "s8",
    "in": [
     "no"
    ]
   },
   "text": "A child is born into poverty, through no one’s fault. May the state tax other people’s honestly earned money to help her?",
   "options": [
    {
     "id": "no",
     "lead": "No.",
     "text": "Help should come from voluntary charity. Taxing people for it takes what is rightfully theirs.",
     "label": "Strict libertarianism"
    },
    {
     "id": "floor",
     "lead": "Yes, but only a safety net.",
     "text": "Everyone gets a basic minimum. Above that, people keep what they earn.",
     "label": "Classical liberalism"
    },
    {
     "id": "commons",
     "lead": "Yes, because the earth belongs to everyone.",
     "text": "No one made the land or its resources, so those who own them owe everyone else a fair share of their value.",
     "label": "Left-libertarianism"
    }
   ]
  },
  {
   "id": "s10",
   "section": "society",
   "short": "What freedom is",
   "torn": true,
   "text": "What does it take to be free?",
   "hint": "Three people. A slave whose master is kind and never gives orders. A poor man whom no law stops from flying to Paris, but who can’t afford the ticket. A smoker who wants to quit but can’t stop. Which of them is unfree?",
   "options": [
    {
     "id": "neg",
     "lead": "No one stopping you.",
     "text": "You’re free when no one interferes with what you choose. The poor man is poor, not unfree: freedom and money are different things.",
     "label": "Negative liberty"
    },
    {
     "id": "means",
     "lead": "Real options.",
     "text": "You’re free when you can actually do things: having the money, health and skills, not just no one in the way. The poor man is unfree to fly.",
     "label": "Effective freedom"
    },
    {
     "id": "nondom",
     "lead": "No one having power over you.",
     "text": "You’re free when no one can interfere with you at will, even if they never do. The kind master’s slave is unfree: everything depends on his master’s mood.",
     "label": "Freedom as non-domination"
    },
    {
     "id": "self",
     "lead": "Mastering yourself.",
     "text": "You’re free when your own reason and deepest values run your life, not impulses or pressure. The smoker is unfree.",
     "label": "Positive liberty (self-mastery)"
    }
   ]
  },
  {
   "id": "s3",
   "section": "society",
   "short": "Why democracy?",
   "torn": true,
   "text": "What, if anything, makes democracy the right way to govern?",
   "hint": "A country must decide whether to build nuclear power plants. Most voters know little about energy; a panel of engineers knows a lot. Who should decide, and why?",
   "options": [
    {
     "id": "intrinsic",
     "lead": "Equal say.",
     "text": "Giving everyone an equal voice in the laws we all live under is what respect between equals requires, even if experts would sometimes decide better.",
     "label": "Intrinsic value"
    },
    {
     "id": "protect",
     "lead": "Protection.",
     "text": "Voters can remove bad rulers without bloodshed. No group can be trusted with power that no one can take away.",
     "label": "Protective value"
    },
    {
     "id": "epistemic",
     "lead": "Better decisions.",
     "text": "Large, varied groups of ordinary people usually decide better than any small group of experts.",
     "note": "Many partial views, pooled, can beat a few expert ones.",
     "label": "Epistemic value"
    },
    {
     "id": "no",
     "lead": "Other systems can do as well.",
     "text": "Democracy has no special claim. Rule by experts, for example, could govern as well or better.",
     "label": "Democratic skepticism"
    }
   ]
  },
  {
   "id": "s3b",
   "section": "society",
   "short": "Who should decide",
   "when": {
    "q": "s3",
    "in": [
     "no"
    ],
    "not": {
     "q": "s7b",
     "in": [
      "coop",
      "indiv",
      "market"
     ]
    }
   },
   "text": "Then who should decide?",
   "options": [
    {
     "id": "perform",
     "text": "Whoever delivers peace and good results, however they came to power.",
     "note": "A stable, competent government matters more than how it’s chosen.",
     "label": "Results-based legitimacy",
     "lead": "Whoever governs well."
    },
    {
     "id": "epistoc",
     "text": "Everyone may vote, but those who know more get more say: a voting test, or extra votes for the well-informed.",
     "label": "Epistocracy",
     "lead": "The informed."
    },
    {
     "id": "merit",
     "text": "Officials chosen for ability and good character through exams and proven records, and judged by how well the people fare.",
     "note": "China’s imperial examinations picked officials this way for some 1,300 years.",
     "label": "Political meritocracy",
     "lead": "The able and good."
    },
    {
     "id": "heir",
     "lead": "A rightful ruler.",
     "text": "Someone whose right to rule comes from birth, sacred calling or long tradition, such as a hereditary monarch, advised by the wise.",
     "label": "Monarchism"
    }
   ]
  },
  {
   "id": "s4",
   "section": "society",
   "short": "Free speech",
   "text": "Which kinds of speech may the law punish?",
   "note": "Not what’s rude, or what a website may remove: what the state may punish. You may pick both “also” answers. Each “also” answer already includes direct harm, so picking “only direct harm” with one of them counts as just that one.",
   "hint": "Three cases. Someone posts that a named neighbour should be beaten up. A speaker at a rally says a religious group is subhuman. A blogger spreads a false rumour that the banks are collapsing, and people panic.",
   "options": [
    {
     "id": "harm",
     "lead": "Only direct harm.",
     "text": "Threats, fraud, lies that wreck someone’s reputation, urging a crowd to violence. Other bad ideas must be answered with more speech.",
     "label": "Harm principle"
    },
    {
     "id": "dignity",
     "lead": "Also attacks on groups.",
     "text": "Besides direct harm, also attacks on people for who they are, like calling a group subhuman, because such speech undermines their standing as equal members of society.",
     "label": "Dignity principle",
     "note": "Most European countries have laws like this; the United States does not."
    },
    {
     "id": "order",
     "lead": "Also threats to order.",
     "text": "Besides direct harm, also speech that endangers public order or shared values, even if no one in particular is harmed.",
     "label": "Order principle"
    },
    {
     "id": "skeptic",
     "lead": "No general principle.",
     "text": "“Free speech” isn’t one clear right. Every society draws the line for political reasons; the only question is where.",
     "label": "Free-speech skepticism"
    }
   ],
   "torn": true,
   "absorbs": {
    "harm": [
     "dignity",
     "order"
    ]
   }
  },
  {
   "id": "s5",
   "section": "society",
   "short": "Protecting you from yourself",
   "text": "May the state ever push you to do what’s good for you?",
   "note": "Only about choices that mainly affect you. Stopping someone who doesn’t know a bridge is broken doesn’t count: that only checks what they really want.",
   "hint": "Seatbelt laws, taxes on sugary drinks, automatic pension saving that you can opt out of.",
   "options": [
    {
     "id": "never",
     "lead": "No.",
     "text": "Over your own life, you’re in charge, even if you choose badly.",
     "label": "Anti-paternalism"
    },
    {
     "id": "nudge",
     "lead": "Only by nudging.",
     "text": "It may steer you, for example with helpful defaults, as long as you stay free to choose otherwise.",
     "note": "Putting fruit at eye level in the canteen, not banning cake.",
     "label": "Libertarian paternalism"
    },
    {
     "id": "coerce",
     "lead": "Yes, even by law.",
     "text": "It may require or ban things when people predictably harm themselves, as seatbelt laws do.",
     "label": "Coercive paternalism"
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Nothing makes pushing or not pushing truly right or wrong.",
     "label": "Moral skepticism"
    }
   ]
  },
  {
   "id": "s13",
   "section": "society",
   "short": "The state and the good life",
   "text": "People disagree about how to live: which religion, if any, and what makes a life go well. Should the law take sides?",
   "hint": "Should the state fund libraries and opera but not casinos? Teach a religion in state schools? Ban something only because most people find it degrading, though no one is harmed?",
   "options": [
    {
     "id": "neutral",
     "lead": "No. It should stay neutral.",
     "text": "Laws should rest on reasons people of any faith or none can accept, such as rights and fairness, and leave the good life to each person.",
     "label": "Liberal neutrality"
    },
    {
     "id": "perfect",
     "lead": "Yes, for good lives.",
     "text": "The state may encourage what really makes lives go well, such as learning, health and good character, and discourage what wastes them.",
     "label": "Perfectionism"
    },
    {
     "id": "commun",
     "lead": "Yes, for our shared way of life.",
     "text": "A community’s traditions, language and values are part of who its people are, and the law may protect them.",
     "label": "Communitarianism"
    },
    {
     "id": "relig",
     "lead": "Yes, for God’s law.",
     "text": "Law should reflect the moral law that God has given, and the state may honour and support religion.",
     "label": "Religious traditionalism",
     "note": "Many, following Aquinas, add that reason can discover the same law. Some go further: the state should be formally subordinate to one faith, as in Catholic integralism, or govern by its religious law, as in states based on sharia."
    }
   ],
   "torn": true
  },
  {
   "id": "s12",
   "section": "society",
   "short": "Compatriots and strangers",
   "text": "Does your government owe more to its own citizens than to people in other countries?",
   "hint": "Your government could build one hospital at home, or fund clinics abroad that would save ten times as many lives.",
   "options": [
    {
     "id": "nation",
     "lead": "Yes, much more.",
     "text": "A nation is a community with a shared history and culture. Its members owe each other special loyalty, as family members do.",
     "label": "Nationalism"
    },
    {
     "id": "state",
     "lead": "Yes, but only in some ways.",
     "text": "Fellow citizens share laws and a common life, which create special duties among them. To outsiders we owe basic rights and help in emergencies.",
     "label": "Statism"
    },
    {
     "id": "cosmo",
     "lead": "No.",
     "text": "Borders don’t change what we owe: a life saved abroad matters as much as one saved at home.",
     "label": "Cosmopolitanism"
    }
   ]
  },
  {
   "id": "s1",
   "section": "society",
   "short": "Why punish?",
   "text": "What, if anything, justifies punishing criminals?",
   "note": "Prison, fines, and so on: deliberately making someone suffer for a crime.",
   "options": [
    {
     "id": "retrib",
     "lead": "Deserved.",
     "text": "They deserve it for what they did.",
     "note": "Looking back: the crime itself calls for it.",
     "label": "Retributivism"
    },
    {
     "id": "forward",
     "lead": "Prevention.",
     "text": "It protects others, deters crime, or helps offenders change, and only for those reasons.",
     "note": "Looking forward: it’s about preventing future harm.",
     "label": "Forward-looking justification"
    },
    {
     "id": "mixed",
     "lead": "Prevention, but no more than deserved.",
     "text": "Its purpose is to reduce crime, but only the guilty may be punished, and no more than they deserve.",
     "label": "Mixed theory"
    },
    {
     "id": "communic",
     "lead": "Condemnation.",
     "text": "It’s how a community publicly condemns the wrong and calls the offender to account.",
     "note": "A sentence says “what you did was wrong” in a way words alone can’t.",
     "label": "Communicative theory"
    },
    {
     "id": "abolish",
     "lead": "Nothing does.",
     "text": "We should repair harm instead, bringing victim and offender together to make things right.",
     "label": "Penal abolitionism",
     "note": "This is the idea behind “restorative justice.” Many who favour it keep prison as a last resort; this answer rejects punishment altogether."
    },
    {
     "id": "nofact",
     "lead": "Not a matter of fact.",
     "text": "Nothing makes punishing truly justified or unjustified.",
     "label": "Moral skepticism"
    }
   ]
  },
  {
   "id": "s6",
   "section": "society",
   "short": "How institutions change",
   "text": "Institutions should change…",
   "note": "Governments, schools, laws, traditions: how should they change when they need to?",
   "options": [
    {
     "id": "piecemeal",
     "lead": "Step by step,",
     "text": "testing each reform and fixing mistakes as we go.",
     "label": "Piecemeal reform",
     "note": "Popper: fight the worst evils one at a time, so you can see and correct your mistakes, rather than remake society to a blueprint."
    },
    {
     "id": "radical",
     "lead": "By sweeping change.",
     "text": "Our present system is unjust at its roots. Patching it only prolongs it.",
     "label": "Radicalism",
     "note": "Marx: “The philosophers have only interpreted the world, in various ways; the point is to change it.”"
    },
    {
     "id": "conserv",
     "lead": "Carefully, building on what exists,",
     "text": "because long-standing institutions carry wisdom no one designed, and are easier to break than to rebuild.",
     "note": "Chesterton’s thought experiment: you find a fence across a road and see no use for it. Don’t tear it down until you’ve found out why it was built.",
     "label": "Conservatism"
    },
    {
     "id": "restore",
     "lead": "By going back.",
     "text": "Recover good ways that were lost; much modern change was a mistake.",
     "label": "Restorationism",
     "note": "Confucius: “I transmit rather than innovate. I trust in and love the ancient ways.”"
    }
   ]
  },
  {
   "id": "k9",
   "section": "god",
   "short": "God",
   "text": "Does God exist?",
   "intro": "Questions about God and religion, for believers, atheists and everyone in between. Answer for what you actually think.",
   "note": "“God” here means a supreme being, or gods, who made or rule the world and deserve worship. If you call nature itself God, choose Yes. If what you believe in is sacred but isn’t a being (like the Dao or nirvana), choose the second answer. Yes and No don’t require certainty.",
   "options": [
    {
     "id": "yes",
     "lead": "Yes.",
     "text": "There is a God, or gods.",
     "label": "Theism, broadly"
    },
    {
     "id": "ultimate",
     "lead": "Not a god, but something ultimate.",
     "text": "There is something sacred and ultimate, but it isn’t a being who thinks and chooses.",
     "note": "For example the Dao in Daoism, Brahman in Hinduism’s Advaita tradition, or nirvana in Buddhism.",
     "label": "Non-theistic religion"
    },
    {
     "id": "no",
     "lead": "No.",
     "text": "There is no God or gods.",
     "label": "Atheism"
    },
    {
     "id": "agnostic",
     "lead": "I don’t lean either way.",
     "text": "I don’t think we can tell, or the reasons on each side seem equal.",
     "note": "This is different from Undecided, which means you haven’t settled on a view yet.",
     "label": "Agnosticism"
    },
    {
     "id": "nomeaning",
     "lead": "The question has no clear meaning.",
     "text": "Nothing anyone could ever experience would count for or against it, so “God exists” doesn’t say anything clear.",
     "label": "Theological noncognitivism"
    }
   ]
  },
  {
   "id": "k9a",
   "section": "god",
   "short": "What kind of God",
   "text": "What kind of God?",
   "when": {
    "q": "k9",
    "in": [
     "yes"
    ]
   },
   "options": [
    {
     "id": "theism",
     "lead": "One God who knows, wills and cares.",
     "text": "God knows everything, including what we will freely choose, and cares about each of us.",
     "note": "As in Christianity, Islam, Judaism, Sikhism, and Hindu devotion to one God known in many forms.",
     "label": "Personal theism"
    },
    {
     "id": "open",
     "lead": "One God who takes risks.",
     "text": "God cares and responds to us, but doesn’t know in advance what we will freely choose.",
     "label": "Open theism"
    },
    {
     "id": "panentheism",
     "text": "The universe is to God roughly as your body is to you: part of God, yet God is greater than all of it.",
     "note": "As in Ramanuja’s Vedanta, or the process theology of Whitehead and Hartshorne.",
     "label": "Panentheism",
     "lead": "The world is part of God, but God is more."
    },
    {
     "id": "pantheism",
     "text": "God isn’t a being beyond the universe; God is the universe, everything there is.",
     "label": "Pantheism",
     "lead": "God is nature itself."
    },
    {
     "id": "deism",
     "text": "God made the world and its laws, then let it run. No miracles, no answered prayers.",
     "label": "Deism",
     "lead": "A creator who stepped back."
    },
    {
     "id": "poly",
     "text": "There are many gods, each with their own powers and character.",
     "note": "As in Shinto, Yoruba religion, or Greek and Norse religion, old and revived.",
     "label": "Polytheism",
     "lead": "Many gods."
    }
   ]
  },
  {
   "id": "k9f",
   "section": "god",
   "short": "The ultimate",
   "text": "What is that sacred ultimate, as you see it?",
   "when": {
    "q": "k9",
    "in": [
     "ultimate"
    ]
   },
   "options": [
    {
     "id": "absolute",
     "text": "It has no personality and nothing we could describe. Everything comes from it, or truly is it, including your deepest self.",
     "note": "Brahman in Advaita Vedanta, or the “One” of Plotinus.",
     "label": "Non-personal Absolute",
     "lead": "One reality behind everything."
    },
    {
     "id": "dao",
     "text": "A nameless source and pattern that all things follow naturally, with no plan or will behind it.",
     "note": "The Dao of Laozi and Zhuangzi.",
     "label": "Daoism",
     "lead": "The Way."
    },
    {
     "id": "nirvana",
     "text": "There’s no creator and no lasting self, but a real end to suffering and rebirth can be reached.",
     "note": "Nirvana in Buddhism.",
     "label": "Buddhist non-theism",
     "lead": "Freedom from suffering."
    },
    {
     "id": "moksha",
     "text": "There’s no creator, but each soul is eternal and can free itself from karma and rebirth.",
     "note": "Moksha in Jainism.",
     "label": "Jain non-theism",
     "lead": "The soul’s freedom."
    },
    {
     "id": "mystery",
     "text": "Something sacred that no words, and no single tradition, can fully capture.",
     "label": "Mysticism",
     "lead": "Beyond words."
    }
   ]
  },
  {
   "id": "k9d",
   "section": "god",
   "short": "Grounds for belief",
   "text": "What is your belief mostly based on?",
   "torn": true,
   "when": {
    "q": "k9",
    "in": [
     "yes",
     "ultimate"
    ]
   },
   "options": [
    {
     "id": "arguments",
     "lead": "Reasoning:",
     "text": "Careful thinking shows it must be so, for example that the universe needs a cause.",
     "label": "Belief from argument"
    },
    {
     "id": "moral",
     "lead": "Morality:",
     "text": "Right and wrong only make sense if there is a God or a sacred order.",
     "label": "Belief from morality"
    },
    {
     "id": "experience",
     "lead": "Experience:",
     "text": "I, or people I trust, have encountered God or the sacred directly, in daily life or in meditation or prayer.",
     "label": "Religious experience"
    },
    {
     "id": "reveal",
     "lead": "Revelation:",
     "text": "scripture, or the teaching of a tradition I have good reason to trust.",
     "note": "Like the Torah, the Bible, the Qur’an, the Guru Granth Sahib, the Vedas or the Buddha’s teaching.",
     "label": "Belief from revelation"
    },
    {
     "id": "basic",
     "lead": "I just see it.",
     "text": "I don’t need an argument, the way you don’t need one to trust your memory. It comes from how I experience the world.",
     "label": "Properly basic belief"
    },
    {
     "id": "fideism",
     "lead": "Faith.",
     "text": "Faith alone. It doesn’t need reasons to back it up.",
     "label": "Fideism"
    }
   ]
  },
  {
   "id": "k9b",
   "section": "god",
   "short": "Why not God",
   "text": "Why don’t you believe in God?",
   "torn": true,
   "when": {
    "q": "k9",
    "in": [
     "no"
    ]
   },
   "options": [
    {
     "id": "evidence",
     "lead": "Suffering:",
     "text": "There’s so much pointless suffering. An all-good, all-powerful God wouldn’t allow it.",
     "label": "Atheism from evil"
    },
    {
     "id": "hidden",
     "lead": "God would be easy to find.",
     "text": "Many sincere people search for God and never find any sign. A loving God wouldn’t stay hidden from them.",
     "label": "Hiddenness argument"
    },
    {
     "id": "default",
     "text": "Nobody has shown that God exists, and the world can be explained without God. Without good reason, don’t believe.",
     "note": "Russell: if I claimed a tiny teapot orbits the Sun, too small for any telescope to see, you wouldn’t need to disprove it to doubt it.",
     "label": "Atheism by default",
     "lead": "No good reason to believe."
    },
    {
     "id": "debunk",
     "text": "Belief in God comes from how human minds work, how we’re raised and our cultures, not from God being real.",
     "label": "Debunking explanation",
     "lead": "We can explain why people believe."
    },
    {
     "id": "diversity",
     "text": "The world’s religions contradict each other, and none has a better claim than the rest.",
     "label": "Argument from religious diversity",
     "lead": "Too many religions."
    },
    {
     "id": "incoherent",
     "text": "Some things God is supposed to be rule each other out.",
     "note": "For example: a God who never changes couldn’t know what time it is now.",
     "label": "Atheism from incoherence",
     "lead": "The idea doesn’t make sense."
    },
    {
     "id": "nocreator",
     "text": "If the cause of everything never changes, why would things happen one after another instead of all at once?",
     "note": "A classic Buddhist argument (Vasubandhu, Dharmakīrti).",
     "label": "Buddhist anti-creator argument",
     "lead": "A changeless creator couldn’t create."
    }
   ]
  },
  {
   "id": "k9m",
   "when": {
    "q": "k9",
    "in": [
     "agnostic"
    ]
   },
   "text": "Why don’t you lean either way?",
   "options": [
    {
     "id": "balanced",
     "label": "Evidential agnosticism",
     "lead": "Strong on both sides.",
     "text": "There are good arguments for and against, and they roughly cancel out."
    },
    {
     "id": "beyond",
     "label": "Strong agnosticism",
     "lead": "It’s beyond what humans can know.",
     "text": "Whatever the truth is, our minds and evidence can’t reach that far.",
     "note": "Protagoras: “the obscurity of the subject and the brevity of human life” stop us knowing whether the gods exist."
    },
    {
     "id": "weak",
     "label": "Withheld judgment",
     "lead": "Weak on both sides.",
     "text": "The arguments I’ve seen for and against are all poor, so I withhold judgment."
    }
   ],
   "section": "god",
   "short": "Why agnostic"
  },
  {
   "id": "k9e",
   "section": "god",
   "short": "Pascal’s wager",
   "text": "Pascal’s bet: if God exists and you believe, you gain everything; if God doesn’t exist, you lose very little. Should you believe for that reason?",
   "when": {
    "q": "k9",
    "in": [
     "agnostic"
    ]
   },
   "options": [
    {
     "id": "bet",
     "text": "It’s the smart bet.",
     "label": "Pascal’s wager",
     "lead": "Yes."
    },
    {
     "id": "will",
     "text": "When the evidence can’t settle a question that matters to how you live, it’s reasonable to let your hopes decide.",
     "label": "James’s alternative to the wager",
     "lead": "Not as a bet, but hope can decide."
    },
    {
     "id": "nobet",
     "text": "You can’t make yourself believe something just because it pays.",
     "note": "Another common objection: there are too many possible gods to know which one to bet on.",
     "label": "Against the wager",
     "lead": "No."
    }
   ]
  },
  {
   "id": "k9k",
   "section": "god",
   "short": "The problem of evil",
   "text": "Does all the suffering in the world count against God?",
   "note": "If God is all-good and all-powerful, why is there so much suffering? This is called the problem of evil. If you don’t believe in God, answer about the God of Judaism, Christianity and Islam.",
   "hint": "In 1755 an earthquake destroyed Lisbon on a church holiday and killed tens of thousands of people, many of them at prayer. Voltaire asked how a good God could allow it.",
   "options": [
    {
     "id": "logical",
     "lead": "Yes, it rules God out.",
     "text": "An all-good, all-powerful God would stop it. Since suffering exists, there can’t be such a God.",
     "label": "Logical problem of evil"
    },
    {
     "id": "evidential",
     "lead": "Yes, it makes God unlikely.",
     "text": "So much suffering seems pointless. That doesn’t prove there’s no God, but it makes God unlikely.",
     "label": "Evidential problem of evil"
    },
    {
     "id": "outweigh",
     "lead": "Yes, but other reasons win.",
     "text": "Suffering counts against God, but the reasons for God are stronger.",
     "label": "Evidence outweighed"
    },
    {
     "id": "noforce",
     "lead": "No, there are good answers.",
     "text": "There are good explanations, such as the value of free will, for why a good God might allow suffering.",
     "label": "Problem answered"
    },
    {
     "id": "limited",
     "lead": "Only against one idea of God.",
     "text": "It counts against an all-powerful, all-good God, but not against a God with limited power, or a sacred reality that isn’t a person.",
     "label": "Revised idea of the divine"
    }
   ],
   "not": {
    "q": "k9",
    "in": [
     "nomeaning"
    ]
   }
  },
  {
   "id": "k9c",
   "section": "god",
   "short": "Answers to evil",
   "text": "Suppose there is a good, all-powerful God. Why would God let people suffer? Which explanation do you find most convincing?",
   "hint": "A fawn is trapped in a forest fire and dies slowly in pain, with no one ever knowing. What good could that possibly serve? (The philosopher William Rowe’s example.)",
   "torn": true,
   "options": [
    {
     "id": "freewill",
     "lead": "Free will.",
     "text": "God gave people real freedom, and freedom means we can choose to hurt each other. A world of free people is worth that risk.",
     "label": "Free will defense"
    },
    {
     "id": "soulmaking",
     "lead": "Suffering helps us grow.",
     "text": "Without hardship there would be no courage, kindness or forgiveness. A world where people grow through struggle is worth the cost.",
     "label": "Greater-good theodicy",
     "note": "John Hick called this “soul-making.”"
    },
    {
     "id": "skeptical",
     "lead": "We can’t see God’s reasons.",
     "text": "A toddler can’t understand why a parent lets a doctor give a painful injection. We may be in the same position with God.",
     "label": "Skeptical theism"
    },
    {
     "id": "karma",
     "lead": "It comes from past actions.",
     "text": "Suffering is the result of each being’s own past deeds, in this life or earlier ones, so it isn’t unfair.",
     "note": "This is karma, found in Hindu, Buddhist and Jain traditions. Buddhists and Jains need no God for it.",
     "label": "Karma theodicy"
    },
    {
     "id": "redeem",
     "lead": "It will all be made right.",
     "text": "God will heal every suffering, in this life or the next, so that nothing is finally wasted.",
     "label": "Defeat of horrors"
    },
    {
     "id": "trust",
     "lead": "I trust without knowing why.",
     "text": "Like Job in the Bible, I have no answer, but it doesn’t shake my faith.",
     "label": "Faith despite evil"
    },
    {
     "id": "notmoral",
     "lead": "God doesn’t answer to our rules.",
     "text": "God isn’t a person with duties like ours, so “why didn’t God stop it?” is the wrong question to ask.",
     "note": "A view of classical Islamic theology, and of some Christian thinkers following Aquinas.",
     "label": "Divine sovereignty"
    },
    {
     "id": "none",
     "lead": "None of them works.",
     "text": "No explanation makes the suffering fit with a good God.",
     "label": "No theodicy works"
    }
   ],
   "when": {
    "q": "k9k",
    "in": [
     "logical",
     "evidential",
     "outweigh",
     "noforce",
     "limited"
    ],
    "not": {
     "q": "k9",
     "in": [
      "no",
      "nomeaning"
     ]
    }
   },
   "note": "Answer even if you don’t believe in God, or think no explanation fully works: pick the best attempt."
  },
  {
   "id": "k9l",
   "section": "god",
   "short": "Religious experience",
   "text": "People in every culture report feeling God or the sacred directly. What do these experiences show?",
   "hint": "Teresa of Ávila described God’s presence as more certain than her own existence. A Zen practitioner describes the sudden falling away of the self. A neuroscientist can trigger a “sensed presence” by stimulating the brain with electrodes. What follows?",
   "options": [
    {
     "id": "perceive",
     "lead": "They’re real evidence.",
     "text": "Like seeing or hearing: trust them unless there’s a good reason not to.",
     "label": "Principle of credulity"
    },
    {
     "id": "personal",
     "lead": "Only for the person who has them.",
     "text": "If it happens to you, you may reasonably trust it, but it gives no one else a reason.",
     "label": "Experiential authority for the subject"
    },
    {
     "id": "natural",
     "lead": "The brain explains them.",
     "text": "Brains, psychology and culture produce these experiences. They don’t show anything beyond us.",
     "label": "Naturalistic explanation"
    },
    {
     "id": "conflict",
     "lead": "They contradict each other.",
     "text": "Different religions’ experiences point in different directions, so they can’t back any one religion.",
     "label": "Conflicting experiences"
    },
    {
     "id": "feeling",
     "lead": "Real feelings, not glimpses.",
     "text": "They are real and valuable experiences, but feelings, not glimpses of something actually there.",
     "label": "Experience as feeling"
    }
   ]
  },
  {
   "id": "k9g",
   "section": "god",
   "short": "Fine-tuning",
   "text": "If a few basic numbers in physics were slightly different, there could be no stars and no life. Why are they just right?",
   "note": "This is called the “fine-tuning” of the universe.",
   "hint": "Physicists estimate that if the force holding atomic nuclei together were a few percent weaker, elements heavier than hydrogen might never have formed, so there would be no chemistry and no life.",
   "options": [
    {
     "id": "design",
     "text": "A designer set the numbers so that life could exist.",
     "label": "Design",
     "lead": "Someone designed it."
    },
    {
     "id": "multiverse",
     "text": "With countless universes, each set differently, of course we find ourselves in one where life is possible.",
     "label": "Multiverse",
     "lead": "There are many universes."
    },
    {
     "id": "necessary",
     "text": "A deeper theory will show the numbers had to be this way.",
     "label": "Physical necessity",
     "lead": "Physics will explain it."
    },
    {
     "id": "brute",
     "text": "Not everything has an explanation. This is simply how things are.",
     "label": "Brute fact",
     "lead": "It just is."
    },
    {
     "id": "nofine",
     "text": "We don’t know how likely other settings were, or whether life could exist in other forms.",
     "label": "No fine-tuning",
     "lead": "It isn’t really fine-tuned."
    }
   ]
  },
  {
   "id": "k9h",
   "section": "god",
   "short": "The best argument",
   "text": "Which argument for God do you find strongest, even if none convinces you?",
   "options": [
    {
     "id": "cosmo",
     "text": "Why is there anything at all? There must be a first cause, or a being that couldn’t fail to exist.",
     "label": "Cosmological argument",
     "lead": "Something must have started it all."
    },
    {
     "id": "design",
     "text": "The order of nature, from living things to the laws of physics, points to a designer.",
     "label": "Design argument",
     "lead": "Nature looks designed."
    },
    {
     "id": "onto",
     "text": "A greatest possible being that didn’t exist wouldn’t be the greatest possible, so it must exist.",
     "label": "Ontological argument",
     "lead": "The idea of God proves it."
    },
    {
     "id": "moral",
     "text": "Real right and wrong need a source beyond us, and God fits best.",
     "label": "Moral argument",
     "lead": "Morality needs God."
    },
    {
     "id": "experience",
     "text": "Countless people, in every age and culture, report experiencing God directly.",
     "label": "Argument from religious experience",
     "lead": "People experience God."
    },
    {
     "id": "pragmatic",
     "text": "Believing is the wiser choice, or leads to a better life, whether or not it can be proved.",
     "label": "Pragmatic argument",
     "note": "This argues that believing is wise, not that God exists.",
     "lead": "Believing is wiser."
    },
    {
     "id": "none",
     "text": "No argument for God has any real force.",
     "label": "No good argument",
     "lead": "None of them."
    }
   ]
  },
  {
   "id": "k9i",
   "section": "god",
   "short": "Faith and reason",
   "text": "Is it ever reasonable to believe something important without enough evidence?",
   "note": "Religious belief is one place this comes up, though many believers think they do have good evidence.",
   "hint": "Clifford’s example: a shipowner sincerely trusts that his old ship is safe, without checking, and sends it to sea. It sinks. Is his sincere belief an excuse?",
   "options": [
    {
     "id": "never",
     "lead": "No.",
     "text": "Believing anything important without enough evidence is never reasonable.",
     "label": "Evidentialism"
    },
    {
     "id": "basic",
     "lead": "Yes, some beliefs need no argument.",
     "text": "Trusting your memory, or what you seem to experience directly, is reasonable without proof. Some religious beliefs can be like that.",
     "label": "Proper basicality"
    },
    {
     "id": "will",
     "lead": "Yes, when evidence can’t decide.",
     "text": "If a question matters for how you live and the evidence can’t settle it, you may let your hopes decide.",
     "label": "Will to believe"
    },
    {
     "id": "above",
     "lead": "Faith goes beyond reason, not against it.",
     "text": "Reason can show faith is sensible, but some of what faith holds is more than reason alone could prove.",
     "label": "Faith above reason"
    },
    {
     "id": "beyond",
     "lead": "Faith doesn’t answer to evidence.",
     "text": "It is a commitment, and evidence isn’t the right test for it.",
     "label": "Strong fideism"
    },
    {
     "id": "trust",
     "lead": "Faith doesn’t need belief.",
     "text": "You can trust, hope and live by a religion without being sure its claims are true.",
     "label": "Non-doxastic faith"
    }
   ]
  },
  {
   "id": "k9j",
   "section": "god",
   "short": "Many religions",
   "text": "The world’s religions disagree about what is ultimately true. What do you make of that?",
   "options": [
    {
     "id": "exclusive",
     "lead": "One is true.",
     "text": "Where other religions contradict it, they are mistaken, and it alone is the way to salvation or liberation.",
     "label": "Exclusivism"
    },
    {
     "id": "inclusive",
     "lead": "One is truest.",
     "text": "Others hold real truth too, and their followers can reach salvation or liberation through it.",
     "label": "Inclusivism"
    },
    {
     "id": "plural",
     "lead": "Many paths, one reality.",
     "text": "The great religions are different human responses to the same ultimate reality.",
     "note": "As an old Indian verse puts it: “Truth is one; the wise call it by many names.”",
     "label": "Pluralism"
    },
    {
     "id": "suspend",
     "lead": "No one can tell.",
     "text": "Sincere, well-informed people disagree, so no one should be confident theirs is right.",
     "label": "Suspending judgment"
    },
    {
     "id": "allfalse",
     "lead": "None is true.",
     "text": "Their claims about gods and the supernatural are mistaken, whatever wisdom they contain.",
     "label": "Naturalism about religion"
    },
    {
     "id": "practice",
     "lead": "They don’t really compete.",
     "text": "Religions are ways of living, not rival theories about the world.",
     "label": "Religious non-realism"
    }
   ]
  },
  {
   "id": "l1",
   "section": "life",
   "short": "The meaning of life",
   "intro": "These are philosophical questions. If any of them feels personal right now, it can help to talk to someone you trust.",
   "text": "Can a human life have meaning?",
   "note": "Not “is life enjoyable,” but: can a life have a point, something that makes it matter? Meaning we make for ourselves counts too.",
   "options": [
    {
     "id": "yes",
     "lead": "Yes.",
     "text": "A life can have meaning, whether it’s given to us or something we make.",
     "label": "Meaning exists"
    },
    {
     "id": "no",
     "lead": "No.",
     "text": "Nothing gives a life a real point, and nothing we make could either.",
     "label": "Nihilism"
    },
    {
     "id": "confused",
     "lead": "The question doesn’t make sense.",
     "text": "Asking for “the meaning” of a life treats it like a word or a tool. A life isn’t that kind of thing, so there is nothing here to find or to miss.",
     "label": "The question is confused"
    }
   ]
  },
  {
   "id": "l1a",
   "section": "life",
   "short": "Where meaning comes from",
   "when": {
    "q": "l1",
    "in": [
     "yes"
    ]
   },
   "text": "Where does it come from?",
   "options": [
    {
     "id": "god",
     "lead": "From God.",
     "text": "A purpose God gives us, or our relationship with God, or a life that continues after death.",
     "label": "Supernaturalism"
    },
    {
     "id": "worth",
     "lead": "From doing what’s truly worthwhile,",
     "text": "like loving and being loved, helping others, discovering truth or making something beautiful, whether or not you feel fulfilled by it.",
     "label": "Objectivism",
     "note": "In ubuntu and Confucian thought, meaning lies above all in good relationships with family and community."
    },
    {
     "id": "hybrid",
     "lead": "From loving what’s worthwhile.",
     "text": "You need both: real love for what you do, and something that truly deserves that love.",
     "note": "Susan Wolf: you need to love what you do, and it must truly deserve that love. Loving a pointless task isn’t enough; neither is good work you don’t care about.",
     "label": "Hybrid view"
    },
    {
     "id": "subjective",
     "lead": "From you.",
     "text": "Whatever you care about, choose or commit yourself to gives your life its meaning. No meaning is handed to us; we make it.",
     "label": "Subjectivism"
    }
   ]
  },
  {
   "id": "l1b",
   "section": "life",
   "short": "The grass counter",
   "when": {
    "q": "l1a",
    "in": [
     "subjective"
    ]
   },
   "text": "Someone spends his whole life counting blades of grass and finds it deeply fulfilling. Is his life meaningful?",
   "options": [
    {
     "id": "yes",
     "text": "If it fulfils him, it’s meaningful.",
     "label": "Subjectivism",
     "lead": "Yes."
    },
    {
     "id": "no",
     "text": "Something is missing, however he feels.",
     "label": "Hybrid view",
     "lead": "No."
    }
   ]
  },
  {
   "id": "l1e",
   "section": "life",
   "short": "The empty doctor",
   "when": {
    "q": "l1a",
    "in": [
     "worth",
     "hybrid"
    ]
   },
   "text": "A doctor saves thousands of lives, but she feels nothing about her work: it bores her, and she would quit tomorrow if she could afford to. Is her life meaningful?",
   "options": [
    {
     "id": "yes",
     "lead": "Yes.",
     "text": "What she does matters, whatever she feels about it.",
     "label": "Objectivism"
    },
    {
     "id": "no",
     "lead": "Not fully.",
     "text": "Her work is valuable, but meaning also needs her to care about it, and she doesn’t.",
     "label": "Hybrid view"
    }
   ]
  },
  {
   "id": "l1f",
   "section": "life",
   "short": "Meaning without God",
   "when": {
    "q": "l1a",
    "in": [
     "god"
    ]
   },
   "text": "Suppose there turned out to be no God and no life after death. Could a life still have any meaning?",
   "note": "Tolstoy, at the height of his fame, asked whether anything in his life had a meaning that his death would not destroy.",
   "options": [
    {
     "id": "no",
     "lead": "No.",
     "text": "Without God and eternity, everything we do would be wiped out in the end, and nothing would truly matter.",
     "label": "Extreme supernaturalism"
    },
    {
     "id": "less",
     "lead": "Some, but less.",
     "text": "Love, work and goodness would still count for something; God and eternity add a deeper meaning on top.",
     "label": "Moderate supernaturalism"
    }
   ]
  },
  {
   "id": "l1g",
   "section": "life",
   "short": "Why no meaning",
   "when": {
    "q": "l1",
    "in": [
     "no"
    ]
   },
   "text": "What rules meaning out?",
   "options": [
    {
     "id": "god",
     "lead": "There’s no God and no afterlife.",
     "text": "Only they could have given life a point.",
     "label": "Atheist nihilism"
    },
    {
     "id": "cosmic",
     "lead": "We’re too small and too brief.",
     "text": "We die, humanity ends, the stars burn out. From the universe’s point of view, nothing we do makes any difference.",
     "label": "Cosmic insignificance"
    },
    {
     "id": "novalue",
     "lead": "Nothing is really valuable.",
     "text": "We project value onto the world, the way we see faces in clouds, so nothing could make a life worthwhile.",
     "label": "Value nihilism"
    }
   ]
  },
  {
   "id": "l1c",
   "section": "life",
   "short": "Living without meaning",
   "when": {
    "q": "l1",
    "in": [
     "no"
    ]
   },
   "text": "Then how should you live?",
   "options": [
    {
     "id": "revolt",
     "lead": "Defiantly.",
     "text": "Live fully anyway, with no false hope, in spite of the clash between our hunger for meaning and a world that offers none.",
     "note": "Camus: imagine Sisyphus, pushing his rock uphill forever, as happy.",
     "label": "Revolt"
    },
    {
     "id": "irony",
     "lead": "Lightly.",
     "text": "Keep caring about your life, but see the absurdity of taking it so seriously, and smile at it.",
     "note": "Thomas Nagel: meet the absurd with irony, not heroism or despair.",
     "label": "Ironic acceptance"
    },
    {
     "id": "pessim",
     "lead": "With quiet resignation.",
     "text": "Life holds more striving and pain than good, so expect little, want less, and be gentle with others who suffer too.",
     "note": "Schopenhauer found relief in compassion, art and calming one’s desires.",
     "label": "Pessimism"
    },
    {
     "id": "nothing",
     "lead": "Nothing follows.",
     "text": "Without meaning there is no “should”: no way of living is better than any other.",
     "label": "Thoroughgoing nihilism"
    }
   ]
  },
  {
   "id": "l3",
   "section": "life",
   "short": "The deceived man",
   "text": "A man dies believing his life was wonderful: his wife loved him and his friends respected him. In fact his wife cheated on him for years and his friends mocked him behind his back. He never found out. Did his life go as well for him as an identical-feeling life in which it was all real?",
   "note": "About how well his life went for him, not about whether the others behaved badly.",
   "options": [
    {
     "id": "same",
     "lead": "Just as well.",
     "text": "Every moment felt exactly the same to him, and that is all that counts for how a life goes.",
     "label": "Hedonism"
    },
    {
     "id": "worse",
     "lead": "Worse.",
     "text": "His life went worse for him, even though he never knew.",
     "label": "Anti-experientialism"
    }
   ]
  },
  {
   "id": "l3a",
   "section": "life",
   "short": "The man who wants only TV",
   "when": {
    "q": "l3",
    "in": [
     "worse"
    ]
   },
   "text": "Now take a man who, knowing everything about his options, wants only to watch TV alone every day. He never learns, makes or loves anything, and he gets exactly the life he wants. Is his life going as well as it could for him?",
   "options": [
    {
     "id": "desire",
     "lead": "Yes.",
     "text": "It’s his life, and he’s getting what he really wants. That is what going well means.",
     "label": "Preference satisfaction"
    },
    {
     "id": "objlist",
     "lead": "No.",
     "text": "Friendship, knowledge and achievement are good for anyone, and he is missing out on them whether he wants them or not.",
     "label": "Objective list theory"
    },
    {
     "id": "hybrid",
     "lead": "No, but only if he came to care.",
     "text": "Friendship or learning would make his life better only if he came to want them. Good things count when they’re both truly good and truly wanted.",
     "label": "Hybrid theory"
    }
   ]
  },
  {
   "id": "l2",
   "section": "life",
   "short": "Is death bad?",
   "text": "Is death bad for the person who dies?",
   "note": "Not for those left behind, but for the person themselves.",
   "hint": "A healthy 30-year-old dies instantly and painlessly in an accident. Leave aside his family’s grief. Did something bad happen to him?",
   "options": [
    {
     "id": "yes",
     "lead": "Yes.",
     "text": "At least sometimes.",
     "label": "Death is bad"
    },
    {
     "id": "no",
     "lead": "No.",
     "text": "Never: not even for someone young and healthy.",
     "label": "Death is not bad"
    }
   ]
  },
  {
   "id": "l2a",
   "section": "life",
   "short": "When death is bad",
   "when": {
    "q": "l2",
    "in": [
     "yes"
    ]
   },
   "text": "When?",
   "options": [
    {
     "id": "depriv",
     "text": "It’s bad whenever it takes away good years you would otherwise have had, at any age.",
     "label": "Deprivation view",
     "lead": "Whenever it takes good years."
    },
    {
     "id": "early",
     "text": "It’s bad only when it ends a life before its plans and hopes are fulfilled.",
     "label": "Life-plan view",
     "lead": "Only when it cuts life short."
    },
    {
     "id": "both",
     "text": "Any loss of good life is bad, but it’s worse when a life is cut short.",
     "note": "This counts half toward each.",
     "label": "Mixed view",
     "lead": "Both."
    }
   ],
   "hint": "A 95-year-old who has done everything she hoped to do dies peacefully in her sleep. She would have enjoyed a few more quiet years. Was her death bad for her?"
  },
  {
   "id": "l2b",
   "section": "life",
   "short": "Why death isn’t bad",
   "when": {
    "q": "l2",
    "in": [
     "no"
    ]
   },
   "text": "Why not?",
   "options": [
    {
     "id": "epicur",
     "lead": "No one is left to be harmed.",
     "text": "Once you’re gone, nothing can be bad for you.",
     "note": "Epicurus, paraphrased: when death is here, you aren’t; when you’re here, death isn’t.",
     "label": "Epicurean view"
    },
    {
     "id": "natural",
     "lead": "It’s part of nature.",
     "text": "Death belongs to the natural course of things, like autumn after summer, and what is natural is no evil.",
     "note": "When his wife died, Zhuangzi was found drumming on a bowl and singing: she had simply changed form, like the seasons.",
     "label": "Natural acceptance"
    },
    {
     "id": "noself",
     "lead": "There’s no lasting self to lose.",
     "text": "The “you” that seems to be lost was always a passing stream of experiences.",
     "note": "This is the Buddhist teaching of no-self, anatta.",
     "label": "No-self view"
    },
    {
     "id": "after",
     "lead": "It isn’t the end.",
     "text": "You live on after death.",
     "label": "Afterlife view"
    }
   ]
  },
  {
   "id": "l2c",
   "section": "life",
   "short": "Before you were born",
   "when": {
    "q": "l2",
    "in": [
     "yes",
     "no"
    ]
   },
   "text": "You didn’t exist for billions of years before you were born. Was that bad for you?",
   "note": "Lucretius said the time before birth is a mirror held up to the time after death.",
   "options": [
    {
     "id": "asym",
     "text": "Death takes away a future you would otherwise have had.",
     "label": "Asymmetry",
     "lead": "No, but death is different."
    },
    {
     "id": "sym",
     "text": "The two are mirror images.",
     "label": "Symmetry argument",
     "lead": "No, so death isn’t bad either."
    },
    {
     "id": "bothbad",
     "text": "If I could have been born earlier, I missed out on good years.",
     "label": "Both are losses",
     "lead": "Yes, in the same way."
    }
   ]
  },
  {
   "id": "l5",
   "section": "life",
   "short": "After death",
   "text": "What happens to you when you die?",
   "note": "Your best guess, not what you would like to be true.",
   "options": [
    {
     "id": "end",
     "lead": "It’s the end of me.",
     "text": "I simply stop existing.",
     "label": "Annihilation"
    },
    {
     "id": "soul",
     "lead": "My soul lives on",
     "text": "without my body.",
     "label": "Immortal soul",
     "note": "Many African traditions hold that the dead live on as the “living-dead”: persons in the spirit world, close to the family while remembered by name, and after that as spirits (John Mbiti)."
    },
    {
     "id": "resur",
     "lead": "I’ll be raised again,",
     "text": "body and soul, at the end of time.",
     "note": "The teaching of Christianity, Islam and much of Judaism. Many who hold this believe the soul lives on until then.",
     "label": "Resurrection"
    },
    {
     "id": "rebirth",
     "lead": "I’ll be reborn",
     "text": "into another life, again and again, until I’m freed from the cycle.",
     "note": "As in Hindu, Buddhist and Jain traditions.",
     "label": "Rebirth"
    },
    {
     "id": "merge",
     "lead": "I return to the whole.",
     "text": "The separate “me” dissolves back into the ultimate reality it was always part of.",
     "note": "As in Advaita Vedanta, where the self (atman) is one with Brahman. In Advaita this comes after rebirths end.",
     "label": "Return to the whole"
    },
    {
     "id": "unsure",
     "lead": "No one can know,",
     "text": "and I don’t lean either way.",
     "note": "Confucius: “Not yet understanding life, how can you understand death?”",
     "label": "Agnosticism about the afterlife"
    }
   ],
   "torn": true
  },
  {
   "id": "l7",
   "section": "life",
   "short": "Living forever",
   "text": "A treatment would let you live forever, never ageing or falling ill. The people you love could take it too. You could never go back to growing old. Would you take it?",
   "hint": "In Karel Čapek’s play The Makropulos Affair, Elina Makropulos drinks an elixir and lives to 342. By then nothing interests her any more, and she refuses another dose. The philosopher Bernard Williams argued that endless life would end the same way for anyone.",
   "options": [
    {
     "id": "yes",
     "lead": "Yes.",
     "text": "There would always be more to learn, love and do.",
     "label": "Immortality is desirable"
    },
    {
     "id": "longer",
     "lead": "No, but I’d take a much longer life:",
     "text": "centuries, not forever.",
     "label": "Longer, not endless"
    },
    {
     "id": "bored",
     "lead": "No.",
     "text": "Sooner or later I’d run out of things that matter to me, and living would become empty.",
     "label": "Tedium of immortality"
    },
    {
     "id": "precious",
     "lead": "No.",
     "text": "Without an end, nothing would be urgent or precious: there would always be time for everything.",
     "label": "Mortality gives value"
    }
   ]
  },
  {
   "id": "l8",
   "section": "life",
   "short": "Is it good to be born?",
   "text": "Think of an ordinary life: mostly good, with some pain and grief, and in the end death. Is being born into it good for the child who is born?",
   "note": "This is about starting a life. Even David Benatar, best known for arguing that being born is always a harm, holds that a life not worth starting can still be well worth continuing.",
   "hint": "If a child who would suffer terribly is never born, that’s good, even though no one is there to enjoy being spared. If a happy child is never born, that isn’t bad, since no one is there to miss out. David Benatar argues that this lopsidedness makes being born always a harm. The main reply: a good life is a real gift to the one who lives it, even if no one would have missed it had it never begun.",
   "options": [
    {
     "id": "good",
     "lead": "It can be.",
     "text": "If their life goes well overall, being born was good for them.",
     "label": "Existence can benefit"
    },
    {
     "id": "neutral",
     "lead": "Neither good nor bad for them.",
     "text": "Before they existed there was no one who was missing out, so there’s nothing to compare.",
     "label": "Procreative neutrality"
    },
    {
     "id": "pessim",
     "lead": "Usually not.",
     "text": "Most lives, taken as a whole, hold more suffering than good, so starting one is usually a bad bet for the child.",
     "label": "Pessimism about life",
     "note": "Schopenhauer’s view, and part of Benatar’s case."
    },
    {
     "id": "harm",
     "lead": "Never.",
     "text": "Being born is always a harm, however good the life: its pains are real harms, while a person never born misses nothing.",
     "label": "Anti-natalism"
    }
   ]
  },
  {
   "id": "l6",
   "section": "life",
   "short": "Facing death",
   "torn": true,
   "text": "How should you live with the knowledge that you will die?",
   "options": [
    {
     "id": "remember",
     "lead": "Remember it every day.",
     "text": "Keeping death in mind stops you wasting time on what doesn’t matter, and readies you to accept it.",
     "label": "Memento mori"
    },
    {
     "id": "calm",
     "lead": "Understand it, then stop worrying.",
     "text": "Once you see that death is nothing to you, the fear goes away.",
     "label": "Epicurean calm",
     "note": "Epicurus taught this so that fear would not spoil the life you have."
    },
    {
     "id": "accept",
     "lead": "Accept it without clinging.",
     "text": "You, like everything, are always changing. Fear of death comes from clinging to what must pass.",
     "note": "Buddhist non-attachment, and the Daoist acceptance of change (Zhuangzi).",
     "label": "Acceptance and non-attachment"
    },
    {
     "id": "own",
     "lead": "Face it as your own.",
     "text": "Facing your own death squarely is what frees you to stop living as everyone else does and make your life your own.",
     "label": "Being-toward-death"
    },
    {
     "id": "life",
     "lead": "Think about life, not death.",
     "text": "Live well and let death take care of itself.",
     "label": "Focus on life"
    },
    {
     "id": "hope",
     "lead": "Prepare for what comes after.",
     "text": "How you live now shapes what happens to you after death.",
     "label": "Hope beyond death"
    },
    {
     "id": "resist",
     "lead": "Fight it.",
     "text": "Death is an enemy, and we should work to defeat it.",
     "label": "Resistance to death"
    }
   ]
  }
 ],
 "weights": {
  "e1": 1,
  "e2": 1.5,
  "e3": 1.5,
  "e6": 1.5,
  "e2a": 1,
  "e4": 5,
  "e5": 2.5,
  "a1": 2.5,
  "a2": 1.5,
  "a3": 1.5,
  "m1": 2,
  "m2": 1.5,
  "m3": 2.5,
  "m4": 1.5,
  "k1": 1.5,
  "k2": 1.5,
  "k3": 2,
  "k4": 1.5,
  "k7": 1,
  "k8": 1,
  "k9": 3.5,
  "s1": 1.5,
  "s3": 1.5,
  "s4": 1,
  "s5": 1,
  "s6": 2,
  "l1": 2.5,
  "l2": 2,
  "a4": 1.5,
  "a9": 0.5,
  "a5": 1.5,
  "a7": 1,
  "a8": 1,
  "l3": 1.5,
  "l5": 2,
  "l7": 1,
  "l8": 1,
  "l6": 1.5,
  "m6": 1,
  "k9k": 1.5,
  "k9l": 1,
  "k9i": 1.5,
  "k9j": 1,
  "k9g": 1,
  "k9h": 1,
  "k11": 1,
  "k13": 1,
  "k12": 1,
  "s7": 2,
  "s8": 3,
  "s10": 1.5,
  "s13": 2,
  "s12": 1.5
 },
 "sim": {
  "e1": {
   "req|allow": 0.5,
   "allow|wrong": 0.3,
   "nofact|req": 0.05,
   "nofact|allow": 0.15,
   "nofact|wrong": 0.05
  },
  "e2": {
   "req|allow": 0.5,
   "allow|wrong": 0.3,
   "nofact|req": 0.05,
   "nofact|allow": 0.15,
   "nofact|wrong": 0.05
  },
  "e3": {
   "equal|less": 0.4,
   "less|none": 0.25,
   "nofact|less": 0.05,
   "nofact|none": 0.05,
   "nofact|equal": 0.05
  },
  "e4a": {
   "everyone|prior": 0.6,
   "everyone|close": 0.45,
   "everyone|both": 0.5,
   "prior|close": 0.3,
   "prior|both": 0.3,
   "close|me": 0.2,
   "close|both": 0.35,
   "me|both": 0.5
  },
  "e4b": {
   "act|twolevel": 0.75,
   "twolevel|rule": 0.75,
   "act|rule": 0.45
  },
  "e4c": {
   "hedon|pref": 0.35,
   "hedon|objlist": 0.1,
   "hedon|nonwel": 0.05,
   "pref|objlist": 0.35,
   "pref|nonwel": 0.2,
   "objlist|nonwel": 0.5
  },
  "e4d": {
   "pleasure|desire": 0.4,
   "pleasure|flourish": 0.25,
   "pleasure|longrun": 0.35,
   "desire|flourish": 0.15,
   "desire|longrun": 0.3,
   "flourish|longrun": 0.35
  },
  "e4e": {
   "deont|contract": 0.45,
   "deont|divine": 0.2,
   "contract|divine": 0.05
  },
  "e4": {
   "results|virtue": 0.05,
   "results|care": 0.05,
   "results|plural": 0.3,
   "duties|virtue": 0.25,
   "duties|care": 0.15,
   "duties|plural": 0.35,
   "virtue|care": 0.45,
   "virtue|plural": 0.3,
   "virtue|exist": 0.1,
   "care|plural": 0.25,
   "care|exist": 0.05,
   "plural|exist": 0.05,
   "exist|nothing": 0.2,
   "results|duties": 0.1
  },
  "e4f": {
   "absolute|threshold": 0.3,
   "threshold|mixed": 0.5,
   "absolute|mixed": 0.5
  },
  "e4r": {
   "none|constrained": 0.05,
   "none|prereq": 0.35,
   "constrained|prereq": 0.3
  },
  "e4h": {
   "command|right": 0.05,
   "command|nature": 0.45,
   "right|nature": 0.45
  },
  "e4i": {
   "special|graded": 0.5,
   "special|care": 0.5,
   "graded|care": 0.55
  },
  "e4j": {
   "eudaim|sentiment": 0.2,
   "eudaim|conseq": 0.2,
   "eudaim|role": 0.45,
   "sentiment|conseq": 0.3,
   "sentiment|role": 0.2,
   "conseq|role": 0.1
  },
  "e6": {
   "strict|imperfect": 0.35,
   "strict|scalar": 0.45,
   "imperfect|negative": 0.3,
   "imperfect|scalar": 0.35,
   "negative|scalar": 0.2,
   "nofact|imperfect": 0.05,
   "nofact|negative": 0.05,
   "nofact|scalar": 0.1
  },
  "e4k": {
   "doing|intend": 0.4,
   "intend|means": 0.55,
   "doing|means": 0.3
  },
  "e4s": {
   "indirect|trustee": 0.15,
   "indirect|gap": 0.3,
   "trustee|gap": 0.25
  },
  "e4t": {
   "yes|test": 0.3,
   "no|test": 0.35
  },
  "e4w": {
   "little|institutions": 0.25,
   "little|direct": 0.05,
   "institutions|direct": 0.5
  },
  "e4u": {
   "intuition|equilibrium": 0.4,
   "intuition|experience": 0.35,
   "equilibrium|experience": 0.25
  },
  "e4v": {
   "badfaith|situated": 0.5,
   "badfaith|nofail": 0.05,
   "situated|nofail": 0.1
  },
  "e4o": {
   "agent|wisdom": 0.5,
   "agent|ritual": 0.3,
   "wisdom|ritual": 0.3
  },
  "e4p": {
   "ross|ranked": 0.5,
   "ross|particular": 0.55,
   "ranked|particular": 0.15
  },
  "e4q": {
   "authentic|beauvoir": 0.45,
   "authentic|nietzsche": 0.3,
   "beauvoir|nietzsche": 0.15
  },
  "e5f": {
   "kantian|humean": 0.3
  },
  "e5": {
   "yes|construct": 0.45,
   "construct|no": 0.3
  },
  "e5a": {
   "relativism|error": 0.15,
   "relativism|noncog": 0.25,
   "error|noncog": 0.3
  },
  "e5b": {
   "natural|nonnatural": 0.4,
   "natural|theistic": 0.2,
   "nonnatural|theistic": 0.3
  },
  "a1": {
   "thing|us": 0.25,
   "thing|neither": 0.05,
   "us|neither": 0.35
  },
  "a1a": {
   "better|kant": 0.6,
   "better|relative": 0.4,
   "better|none": 0.05,
   "kant|relative": 0.2,
   "kant|none": 0.1,
   "relative|none": 0.35
  },
  "a2": {
   "onlyform|exper": 0.35,
   "onlyform|feeling": 0.1,
   "onlyform|insight": 0.05,
   "onlyform|skill": 0.15,
   "onlyform|plural": 0.15,
   "exper|feeling": 0.3,
   "exper|insight": 0.2,
   "exper|skill": 0.15,
   "exper|moral": 0.1,
   "exper|plural": 0.35,
   "feeling|insight": 0.35,
   "feeling|skill": 0.1,
   "feeling|moral": 0.3,
   "feeling|plural": 0.35,
   "insight|skill": 0.15,
   "insight|moral": 0.4,
   "insight|plural": 0.35,
   "skill|moral": 0.05,
   "skill|plural": 0.35,
   "moral|plural": 0.3
  },
  "a3": {
   "autonomy|moderate": 0.45,
   "autonomy|ethicism": 0.15,
   "autonomy|immoral2": 0.25,
   "moderate|ethicism": 0.55,
   "moderate|immoral2": 0.2,
   "moderate|moralism": 0.3,
   "ethicism|immoral2": 0.05,
   "ethicism|moralism": 0.45
  },
  "m1a": {
   "identity|function": 0.5,
   "identity|folk": 0.3,
   "identity|elim": 0.35,
   "identity|mystery": 0.3,
   "function|folk": 0.3,
   "function|elim": 0.5,
   "function|mystery": 0.25,
   "folk|elim": 0.5,
   "folk|mystery": 0.1,
   "elim|mystery": 0.1
  },
  "m1b": {
   "propdual|soul": 0.4,
   "propdual|form": 0.25,
   "propdual|panpsych": 0.4,
   "propdual|idealism": 0.1,
   "propdual|neutral": 0.3,
   "soul|form": 0.45,
   "soul|panpsych": 0.1,
   "soul|idealism": 0.2,
   "soul|neutral": 0.05,
   "form|panpsych": 0.15,
   "form|idealism": 0.05,
   "form|neutral": 0.15,
   "panpsych|idealism": 0.35,
   "panpsych|neutral": 0.55,
   "idealism|neutral": 0.3
  },
  "m2a": {
   "simple|person": 0.15,
   "simple|story": 0.1,
   "simple|witness": 0.45,
   "person|story": 0.35,
   "person|witness": 0.05,
   "story|witness": 0.05
  },
  "m2b": {
   "bundle|conv": 0.7,
   "bundle|noself": 0.55,
   "conv|noself": 0.5
  },
  "m3c": {
   "classic|hier": 0.5,
   "classic|reasons": 0.5,
   "hier|reasons": 0.6
  },
  "m3d": {
   "quarantine|answer": 0.6,
   "quarantine|abolish": 0.5,
   "quarantine|illusion": 0.2,
   "answer|abolish": 0.3,
   "answer|illusion": 0.15,
   "abolish|illusion": 0.05
  },
  "m4": {
   "you|nofact": 0.4,
   "someone|nofact": 0.1
  },
  "m4a": {
   "both|neither": 0.05,
   "both|nomatter": 0.35,
   "neither|nomatter": 0.35
  },
  "m4b": {
   "body|brain": 0.5,
   "body|soul": 0.05,
   "brain|soul": 0.05
  },
  "m5": {
   "make|own": 0.45,
   "make|practice": 0.3,
   "make|noult": 0.05,
   "make|nothing": 0.15,
   "own|practice": 0.45,
   "own|noult": 0.05,
   "own|nothing": 0.2,
   "practice|noult": 0.05,
   "practice|nothing": 0.3,
   "noult|nothing": 0.5
  },
  "k2b": {
   "empiric|construct": 0.1,
   "empiric|mixed": 0.25,
   "empiric|formal": 0.05,
   "empiric|fiction": 0.05,
   "construct|mixed": 0.35,
   "construct|formal": 0.2,
   "construct|fiction": 0.15,
   "mixed|formal": 0.5,
   "mixed|fiction": 0.35,
   "formal|fiction": 0.55
  },
  "k3": {
   "rational|kant": 0.5,
   "empiric|kant": 0.35
  },
  "k4a": {
   "fallib|common": 0.4,
   "fallib|hinge": 0.3,
   "fallib|pragma": 0.3,
   "fallib|abduct": 0.35,
   "fallib|proof": 0.15,
   "fallib|context": 0.4,
   "fallib|struct": 0.15,
   "fallib|ideal": 0.05,
   "common|hinge": 0.55,
   "common|pragma": 0.35,
   "common|abduct": 0.3,
   "common|proof": 0.2,
   "common|context": 0.25,
   "common|struct": 0.1,
   "common|ideal": 0.05,
   "hinge|pragma": 0.4,
   "hinge|abduct": 0.15,
   "hinge|proof": 0.05,
   "hinge|context": 0.3,
   "hinge|struct": 0.1,
   "hinge|ideal": 0.05,
   "pragma|abduct": 0.2,
   "pragma|proof": 0.05,
   "pragma|context": 0.3,
   "pragma|struct": 0.15,
   "pragma|ideal": 0.1,
   "abduct|proof": 0.35,
   "abduct|context": 0.15,
   "abduct|struct": 0.1,
   "abduct|ideal": 0.05,
   "proof|context": 0.05,
   "proof|struct": 0.05,
   "proof|ideal": 0.05,
   "context|struct": 0.1,
   "context|ideal": 0.05,
   "struct|ideal": 0.3
  },
  "k8a": {
   "powers|process": 0.35,
   "powers|necessit": 0.35,
   "powers|primitive": 0.4,
   "process|necessit": 0.3,
   "process|primitive": 0.25,
   "necessit|primitive": 0.35,
   "necessit|god": 0.15,
   "primitive|god": 0.05
  },
  "k8b": {
   "regular|counter": 0.35,
   "regular|project": 0.55,
   "regular|none": 0.3,
   "counter|project": 0.2,
   "counter|none": 0.15,
   "project|none": 0.35
  },
  "k9": {
   "yes|ultimate": 0.5,
   "yes|agnostic": 0.15,
   "ultimate|no": 0.2,
   "ultimate|agnostic": 0.15,
   "ultimate|nomeaning": 0.1,
   "no|agnostic": 0.35,
   "no|nomeaning": 0.35,
   "agnostic|nomeaning": 0.35
  },
  "k9a": {
   "theism|open": 0.7,
   "theism|panentheism": 0.35,
   "theism|pantheism": 0.1,
   "theism|deism": 0.35,
   "theism|poly": 0.1,
   "open|panentheism": 0.45,
   "open|pantheism": 0.1,
   "open|deism": 0.15,
   "open|poly": 0.1,
   "panentheism|pantheism": 0.5,
   "panentheism|deism": 0.1,
   "panentheism|poly": 0.05,
   "pantheism|deism": 0.25,
   "pantheism|poly": 0.05,
   "deism|poly": 0.05
  },
  "k9b": {
   "evidence|hidden": 0.55,
   "evidence|default": 0.3,
   "evidence|debunk": 0.15,
   "evidence|diversity": 0.15,
   "evidence|incoherent": 0.3,
   "evidence|nocreator": 0.15,
   "hidden|default": 0.3,
   "hidden|debunk": 0.15,
   "hidden|diversity": 0.3,
   "hidden|incoherent": 0.15,
   "hidden|nocreator": 0.1,
   "default|debunk": 0.45,
   "default|diversity": 0.35,
   "default|incoherent": 0.15,
   "default|nocreator": 0.15,
   "debunk|diversity": 0.4,
   "debunk|incoherent": 0.05,
   "debunk|nocreator": 0.05,
   "diversity|incoherent": 0.05,
   "diversity|nocreator": 0.05,
   "incoherent|nocreator": 0.45
  },
  "k9c": {
   "freewill|soulmaking": 0.45,
   "freewill|skeptical": 0.2,
   "freewill|karma": 0.3,
   "freewill|redeem": 0.25,
   "freewill|trust": 0.1,
   "freewill|notmoral": 0.05,
   "soulmaking|skeptical": 0.2,
   "soulmaking|karma": 0.2,
   "soulmaking|redeem": 0.4,
   "soulmaking|trust": 0.1,
   "soulmaking|notmoral": 0.05,
   "skeptical|karma": 0.05,
   "skeptical|redeem": 0.25,
   "skeptical|trust": 0.5,
   "skeptical|notmoral": 0.3,
   "skeptical|none": 0.1,
   "karma|redeem": 0.1,
   "karma|trust": 0.05,
   "karma|notmoral": 0.05,
   "redeem|trust": 0.3,
   "redeem|notmoral": 0.1,
   "trust|notmoral": 0.3,
   "trust|none": 0.15,
   "notmoral|none": 0.1
  },
  "k9d": {
   "arguments|moral": 0.45,
   "arguments|experience": 0.15,
   "arguments|reveal": 0.15,
   "arguments|basic": 0.05,
   "moral|experience": 0.15,
   "moral|reveal": 0.15,
   "moral|basic": 0.15,
   "moral|fideism": 0.05,
   "experience|reveal": 0.3,
   "experience|basic": 0.55,
   "experience|fideism": 0.15,
   "reveal|basic": 0.2,
   "reveal|fideism": 0.3,
   "basic|fideism": 0.25
  },
  "s1": {
   "retrib|forward": 0.05,
   "retrib|mixed": 0.5,
   "communic|retrib": 0.5,
   "forward|mixed": 0.5,
   "communic|forward": 0.2,
   "abolish|forward": 0.2,
   "communic|mixed": 0.35,
   "abolish|mixed": 0.1,
   "communic|abolish": 0.2,
   "abolish|nofact": 0.15
  },
  "s3b": {
   "perform|epistoc": 0.3,
   "perform|merit": 0.45,
   "heir|perform": 0.15,
   "epistoc|merit": 0.55,
   "heir|epistoc": 0.1,
   "heir|merit": 0.25
  },
  "s5": {
   "never|nudge": 0.4,
   "nudge|coerce": 0.4
  },
  "s6": {
   "piecemeal|radical": 0.1,
   "piecemeal|conserv": 0.5,
   "piecemeal|restore": 0.1,
   "radical|restore": 0.2,
   "conserv|restore": 0.4
  },
  "l1a": {
   "god|worth": 0.3,
   "god|hybrid": 0.2,
   "god|subjective": 0.05,
   "worth|hybrid": 0.65,
   "worth|subjective": 0.1,
   "hybrid|subjective": 0.4
  },
  "l2a": {
   "depriv|early": 0.35,
   "depriv|both": 0.6,
   "early|both": 0.55
  },
  "a1b": {
   "harmony|higher": 0.4,
   "harmony|fit": 0.35,
   "harmony|simple": 0.25,
   "harmony|transient": 0.1,
   "higher|fit": 0.15,
   "higher|simple": 0.3,
   "higher|transient": 0.1,
   "fit|simple": 0.2,
   "fit|transient": 0.1,
   "simple|transient": 0.15
  },
  "a6": {
   "perception|pleasure": 0.25,
   "perception|unique": 0.3,
   "perception|none": 0.35,
   "pleasure|unique": 0.25,
   "pleasure|none": 0.3,
   "unique|none": 0.05
  },
  "a4": {
   "repr|express": 0.2,
   "repr|aesthetic": 0.2,
   "repr|artworld": 0.05,
   "repr|cluster": 0.2,
   "repr|open": 0.05,
   "express|aesthetic": 0.3,
   "express|artworld": 0.05,
   "express|cluster": 0.2,
   "express|open": 0.05,
   "aesthetic|artworld": 0.05,
   "aesthetic|cluster": 0.25,
   "aesthetic|open": 0.05,
   "artworld|cluster": 0.15,
   "artworld|open": 0.2,
   "cluster|open": 0.55
  },
  "a4a": {
   "status|meaning": 0.35,
   "status|history": 0.4,
   "meaning|history": 0.4
  },
  "a9": {
   "yes|tool": 0.4,
   "yes|ai": 0.4,
   "tool|ai": 0.3,
   "tool|no": 0.25,
   "ai|no": 0.1
  },
  "a5": {
   "actual|hypo": 0.55,
   "actual|text": 0.1,
   "hypo|text": 0.45,
   "hypo|reader": 0.1,
   "text|reader": 0.25
  },
  "a7": {
   "same|learn": 0.35,
   "same|achieve": 0.05,
   "learn|achieve": 0.2,
   "learn|context": 0.25,
   "achieve|context": 0.5
  },
  "a8": {
   "equal|higher": 0.05,
   "equal|incomp": 0.35,
   "equal|social": 0.35,
   "higher|incomp": 0.1,
   "higher|industry": 0.45,
   "incomp|industry": 0.05,
   "incomp|social": 0.2,
   "industry|social": 0.15
  },
  "a1c": {
   "quasi|emotiv": 0.25
  },
  "l1": {
   "yes|confused": 0.05,
   "no|confused": 0.3
  },
  "l1g": {
   "god|cosmic": 0.3,
   "god|novalue": 0.15,
   "cosmic|novalue": 0.35
  },
  "l1c": {
   "revolt|irony": 0.5,
   "revolt|pessim": 0.15,
   "revolt|nothing": 0.1,
   "irony|pessim": 0.15,
   "irony|nothing": 0.2,
   "pessim|nothing": 0.15
  },
  "l3a": {
   "desire|objlist": 0.05,
   "desire|hybrid": 0.4,
   "objlist|hybrid": 0.55
  },
  "l2c": {
   "asym|sym": 0.15,
   "asym|bothbad": 0.35,
   "sym|bothbad": 0.25
  },
  "l2b": {
   "epicur|natural": 0.35,
   "epicur|noself": 0.3,
   "natural|noself": 0.35,
   "natural|after": 0.05,
   "noself|after": 0.1
  },
  "l5": {
   "end|merge": 0.15,
   "end|unsure": 0.15,
   "soul|resur": 0.5,
   "soul|rebirth": 0.3,
   "soul|merge": 0.25,
   "soul|unsure": 0.1,
   "resur|rebirth": 0.15,
   "resur|merge": 0.1,
   "resur|unsure": 0.1,
   "rebirth|merge": 0.45,
   "rebirth|unsure": 0.1,
   "merge|unsure": 0.1
  },
  "l7": {
   "yes|longer": 0.35,
   "longer|bored": 0.5,
   "longer|precious": 0.45,
   "bored|precious": 0.55
  },
  "l8": {
   "good|neutral": 0.3,
   "good|pessim": 0.25,
   "neutral|pessim": 0.1,
   "neutral|harm": 0.3,
   "pessim|harm": 0.5
  },
  "l6": {
   "remember|calm": 0.3,
   "remember|accept": 0.35,
   "remember|own": 0.4,
   "remember|life": 0.1,
   "remember|hope": 0.25,
   "calm|accept": 0.35,
   "calm|own": 0.1,
   "calm|life": 0.35,
   "accept|own": 0.15,
   "accept|life": 0.2,
   "accept|hope": 0.1,
   "own|life": 0.05,
   "own|hope": 0.1,
   "life|resist": 0.1
  },
  "m1c": {
   "interact|epiphen": 0.1,
   "interact|parallel": 0.15,
   "epiphen|parallel": 0.45
  },
  "m1d": {
   "incoherent|imaginable": 0.55,
   "imaginable|possible": 0.2
  },
  "m6": {
   "program|split": 0.45,
   "program|stuff": 0.15,
   "program|unknown": 0.15,
   "split|stuff": 0.25,
   "split|never": 0.1,
   "split|unknown": 0.25,
   "stuff|never": 0.35,
   "stuff|unknown": 0.2,
   "never|unknown": 0.15
  },
  "m3": {
   "libert|compat": 0.25,
   "libert|unsure": 0.5,
   "libert|no": 0.15,
   "compat|unsure": 0.1,
   "compat|no": 0.1,
   "unsure|no": 0.45
  },
  "m3b": {
   "agent|event": 0.6,
   "agent|noncausal": 0.5,
   "event|noncausal": 0.45
  },
  "m3f": {
   "determ|luck": 0.6,
   "determ|selfmade": 0.5,
   "determ|science": 0.35,
   "luck|selfmade": 0.6,
   "luck|science": 0.3,
   "selfmade|science": 0.25
  },
  "m3e": {
   "yes|dilemma": 0.1,
   "no|dilemma": 0.5
  },
  "m1": {
   "yes|unclear": 0.2,
   "no|unclear": 0.2
  },
  "k9f": {
   "absolute|dao": 0.4,
   "absolute|nirvana": 0.2,
   "absolute|moksha": 0.25,
   "absolute|mystery": 0.4,
   "dao|nirvana": 0.3,
   "dao|moksha": 0.1,
   "dao|mystery": 0.4,
   "nirvana|moksha": 0.45,
   "nirvana|mystery": 0.25,
   "moksha|mystery": 0.1
  },
  "k9e": {
   "bet|will": 0.35,
   "will|nobet": 0.3
  },
  "k9k": {
   "logical|evidential": 0.6,
   "logical|outweigh": 0.1,
   "logical|limited": 0.25,
   "evidential|outweigh": 0.4,
   "evidential|noforce": 0.05,
   "evidential|limited": 0.3,
   "outweigh|noforce": 0.35,
   "outweigh|limited": 0.1,
   "noforce|limited": 0.05
  },
  "k9l": {
   "perceive|personal": 0.5,
   "perceive|conflict": 0.05,
   "perceive|feeling": 0.1,
   "personal|natural": 0.05,
   "personal|conflict": 0.3,
   "personal|feeling": 0.15,
   "natural|conflict": 0.35,
   "natural|feeling": 0.5,
   "conflict|feeling": 0.2
  },
  "k9g": {
   "design|multiverse": 0.1,
   "design|necessary": 0.05,
   "multiverse|necessary": 0.2,
   "multiverse|brute": 0.1,
   "multiverse|nofine": 0.1,
   "necessary|brute": 0.2,
   "necessary|nofine": 0.3,
   "brute|nofine": 0.3
  },
  "k9h": {
   "cosmo|design": 0.35,
   "cosmo|onto": 0.35,
   "cosmo|moral": 0.15,
   "cosmo|experience": 0.1,
   "cosmo|pragmatic": 0.05,
   "design|onto": 0.1,
   "design|moral": 0.2,
   "design|experience": 0.15,
   "design|pragmatic": 0.05,
   "onto|moral": 0.1,
   "onto|experience": 0.05,
   "moral|experience": 0.2,
   "moral|pragmatic": 0.2,
   "experience|pragmatic": 0.15,
   "none|pragmatic": 0.1
  },
  "k9i": {
   "never|basic": 0.05,
   "never|above": 0.05,
   "never|trust": 0.3,
   "basic|will": 0.3,
   "basic|above": 0.35,
   "basic|beyond": 0.15,
   "basic|trust": 0.1,
   "will|above": 0.25,
   "will|beyond": 0.35,
   "will|trust": 0.4,
   "above|beyond": 0.3,
   "above|trust": 0.15,
   "beyond|trust": 0.25
  },
  "k9j": {
   "exclusive|inclusive": 0.5,
   "exclusive|plural": 0.1,
   "inclusive|plural": 0.4,
   "inclusive|suspend": 0.05,
   "inclusive|practice": 0.1,
   "plural|suspend": 0.2,
   "plural|allfalse": 0.05,
   "plural|practice": 0.3,
   "suspend|allfalse": 0.25,
   "suspend|practice": 0.1,
   "allfalse|practice": 0.25
  },
  "k9m": {
   "balanced|beyond": 0.3,
   "balanced|weak": 0.45,
   "beyond|weak": 0.3
  },
  "k11": {
   "jtb|track": 0.15,
   "jtb|defeat": 0.4,
   "jtb|virtue": 0.15,
   "jtb|infall": 0.05,
   "jtb|basic": 0.05,
   "track|defeat": 0.3,
   "track|virtue": 0.45,
   "track|infall": 0.25,
   "track|basic": 0.3,
   "defeat|virtue": 0.25,
   "defeat|infall": 0.2,
   "defeat|basic": 0.1,
   "virtue|infall": 0.1,
   "virtue|basic": 0.2,
   "infall|basic": 0.2
  },
  "k4": {
   "yes|pointless": 0.3,
   "no|pointless": 0.05
  },
  "k4b": {
   "pyrrho|academic": 0.55,
   "pyrrho|natural": 0.25,
   "academic|natural": 0.4
  },
  "k1": {
   "true|selective": 0.6,
   "true|tools": 0.05,
   "selective|tools": 0.25
  },
  "k1b": {
   "instrument|empirical": 0.55,
   "instrument|pragmatic": 0.45,
   "instrument|framework": 0.2,
   "empirical|pragmatic": 0.3,
   "empirical|framework": 0.15,
   "pragmatic|framework": 0.35
  },
  "k2a": {
   "intuition|logic": 0.35,
   "intuition|indisp": 0.1,
   "logic|indisp": 0.1
  },
  "k7": {
   "yes|spotlight": 0.5,
   "yes|growing": 0.3,
   "yes|unreal": 0.15,
   "yes|verbal": 0.1,
   "spotlight|growing": 0.45,
   "spotlight|present": 0.25,
   "spotlight|verbal": 0.05,
   "growing|present": 0.45,
   "growing|verbal": 0.05,
   "present|unreal": 0.05,
   "present|verbal": 0.1,
   "unreal|verbal": 0.1
  },
  "k12": {
   "universal|ordinary": 0.2,
   "universal|organic": 0.1,
   "universal|monism": 0.1,
   "universal|verbal": 0.2,
   "ordinary|organic": 0.45,
   "ordinary|nihil": 0.1,
   "ordinary|monism": 0.1,
   "ordinary|verbal": 0.3,
   "organic|nihil": 0.45,
   "organic|monism": 0.1,
   "organic|verbal": 0.05,
   "nihil|monism": 0.25,
   "nihil|verbal": 0.1,
   "monism|verbal": 0.05
  },
  "k13": {
   "corresp|cohere": 0.05,
   "corresp|pragma": 0.1,
   "corresp|deflate": 0.2,
   "corresp|plural": 0.35,
   "cohere|pragma": 0.45,
   "cohere|deflate": 0.1,
   "cohere|plural": 0.3,
   "pragma|deflate": 0.2,
   "pragma|plural": 0.3,
   "deflate|plural": 0.15
  },
  "s7": {
   "no|nofact": 0.2
  },
  "s7a": {
   "consent|fair": 0.4,
   "consent|justice": 0.15,
   "consent|member": 0.15,
   "consent|mandate": 0.05,
   "consent|useful": 0.1,
   "fair|justice": 0.4,
   "fair|member": 0.3,
   "fair|mandate": 0.05,
   "fair|useful": 0.3,
   "justice|member": 0.3,
   "justice|mandate": 0.1,
   "justice|useful": 0.3,
   "member|mandate": 0.2,
   "member|useful": 0.15,
   "mandate|useful": 0.05
  },
  "s7b": {
   "keep|coop": 0.15,
   "keep|indiv": 0.15,
   "keep|market": 0.15,
   "keep|nofact": 0.1,
   "coop|indiv": 0.4,
   "coop|market": 0.1,
   "coop|nofact": 0.05,
   "indiv|market": 0.5,
   "indiv|nofact": 0.15,
   "market|nofact": 0.05
  },
  "s8": {
   "yes|rules": 0.5,
   "no|rules": 0.15,
   "no|nofact": 0.05,
   "rules|nofact": 0.1
  },
  "s8a": {
   "welfare|prior": 0.65,
   "welfare|diff": 0.3,
   "welfare|luck": 0.15,
   "welfare|enough": 0.2,
   "welfare|status": 0.1,
   "welfare|desert": 0.1,
   "welfare|common": 0.1,
   "welfare|settled": 0.25,
   "prior|diff": 0.55,
   "prior|luck": 0.25,
   "prior|enough": 0.4,
   "prior|status": 0.2,
   "prior|desert": 0.1,
   "prior|common": 0.15,
   "prior|settled": 0.05,
   "diff|luck": 0.45,
   "diff|enough": 0.3,
   "diff|status": 0.4,
   "diff|desert": 0.05,
   "diff|common": 0.2,
   "diff|settled": 0.05,
   "luck|enough": 0.15,
   "luck|status": 0.3,
   "luck|desert": 0.35,
   "luck|common": 0.2,
   "enough|status": 0.4,
   "enough|desert": 0.1,
   "enough|common": 0.1,
   "enough|settled": 0.05,
   "status|desert": 0.05,
   "status|common": 0.35,
   "desert|common": 0.15,
   "desert|settled": 0.2
  },
  "s8b": {
   "no|floor": 0.45,
   "no|commons": 0.2,
   "floor|commons": 0.3
  },
  "s10": {
   "neg|means": 0.1,
   "neg|nondom": 0.3,
   "neg|self": 0.05,
   "means|nondom": 0.2,
   "means|self": 0.25,
   "nondom|self": 0.2
  },
  "s3": {
   "intrinsic|protect": 0.3,
   "intrinsic|epistemic": 0.3,
   "protect|epistemic": 0.4,
   "protect|no": 0.1,
   "epistemic|no": 0.05
  },
  "s4": {
   "harm|dignity": 0.4,
   "harm|order": 0.1,
   "skeptic|harm": 0.05,
   "dignity|order": 0.4,
   "skeptic|dignity": 0.15,
   "skeptic|order": 0.15
  },
  "s13": {
   "neutral|perfect": 0.05,
   "neutral|commun": 0.05,
   "perfect|commun": 0.45,
   "perfect|relig": 0.4,
   "commun|relig": 0.4
  },
  "s12": {
   "nation|state": 0.5,
   "state|cosmo": 0.35
  },
  "e1a": {
   "yes|may": 0.45,
   "may|protect": 0.45
  },
  "e2a": {
   "means|redirect": 0.5,
   "means|force": 0.35,
   "redirect|force": 0.3,
   "twolevel|means": 0.1,
   "twolevel|redirect": 0.05,
   "twolevel|force": 0.05
  },
  "e4l": {
   "victim|agent": 0.4
  },
  "e4g": {
   "mutual|fair": 0.35
  },
  "e4m": {
   "stoic|aristotle": 0.45
  },
  "e4n": {
   "unity|disunity": 0.1
  },
  "e5c": {
   "cultural|standards": 0.5
  },
  "e5d": {
   "fiction|abolish": 0.2,
   "fiction|conserve": 0.55,
   "abolish|conserve": 0.05
  },
  "e5e": {
   "quasi|emotiv": 0.25
  },
  "l1b": {
   "yes|no": 0.1
  },
  "l1e": {
   "yes|no": 0.3
  },
  "l1f": {
   "no|less": 0.3
  },
  "l3": {},
  "l2": {},
  "m2": {},
  "k2": {},
  "k8": {}
 },
 "survey": {
  "e1": {
   "s": "Trolley problem",
   "map": {
    "req": "Switch",
    "allow": "Switch",
    "wrong": "Don't switch"
   }
  },
  "e2": {
   "s": "Footbridge",
   "map": {
    "req": "Push",
    "allow": "Push",
    "wrong": "Don't push"
   }
  },
  "e4": {
   "s": "Normative ethics",
   "map": {
    "virtue": "Virtue ethics"
   }
  },
  "e4a": {
   "s": "Normative ethics",
   "map": {
    "everyone": "Consequentialism",
    "prior": "Consequentialism"
   }
  },
  "e4e": {
   "s": "Normative ethics",
   "map": {
    "deont": "Deontology"
   }
  },
  "e4c": {
   "s": "Experience machine",
   "map": {
    "hedon": "Yes",
    "pref": "No",
    "objlist": "No",
    "nonwel": "No"
   }
  },
  "e5": {
   "s": "Meta-ethics",
   "map": {
    "yes": "Moral realism",
    "no": "Moral anti-realism"
   }
  },
  "a1": {
   "s": "Aesthetic value",
   "map": {
    "thing": "Objective"
   }
  },
  "m1": {
   "s": "Mind",
   "map": {
    "yes": "Physicalism",
    "no": "Non-physicalism"
   }
  },
  "m1a": {
   "s": "Consciousness",
   "map": {
    "identity": "Identity theory",
    "function": "Functionalism",
    "elim": "Eliminativism"
   }
  },
  "m1b": {
   "s": "Consciousness",
   "map": {
    "propdual": "Dualism",
    "soul": "Dualism",
    "panpsych": "Panpsychism"
   }
  },
  "m3": {
   "s": "Free will",
   "map": {
    "libert": "Libertarianism",
    "compat": "Compatibilism",
    "no": "No free will"
   }
  },
  "m4": {
   "s": "Teletransporter",
   "map": {
    "you": "Survival",
    "someone": "Death"
   }
  },
  "k1": {
   "s": "Science",
   "map": {
    "true": "Scientific realism",
    "selective": "Scientific realism",
    "tools": "Scientific anti-realism"
   }
  },
  "k2": {
   "s": "Abstract objects",
   "map": {
    "yes": "Platonism",
    "no": "Nominalism"
   }
  },
  "k3": {
   "s": "Knowledge",
   "map": {
    "rational": "Rationalism",
    "empiric": "Empiricism"
   }
  },
  "k4": {
   "s": "External world",
   "map": {
    "yes": "Non-skeptical realism",
    "no": "Skepticism"
   }
  },
  "k7": {
   "s": "Temporal ontology",
   "map": {
    "yes": "Eternalism",
    "spotlight": "Eternalism",
    "growing": "Growing block",
    "present": "Presentism"
   }
  },
  "k8b": {
   "s": "Causation",
   "map": {
    "counter": "Counterfactual",
    "none": "Nonexistent"
   }
  },
  "k9": {
   "s": "God",
   "map": {
    "yes": "Theism",
    "no": "Atheism"
   }
  },
  "l1": {
   "s": "Meaning of life",
   "map": {
    "no": "Nonexistent"
   }
  },
  "l1a": {
   "s": "Meaning of life",
   "map": {
    "god": "Objective",
    "worth": "Objective",
    "subjective": "Subjective"
   }
  },
  "a1a": {
   "s": "Aesthetic value",
   "map": {
    "better": "Objective",
    "relative": "Subjective",
    "none": "Subjective"
   }
  },
  "a1c": {
   "s": "Aesthetic value",
   "map": {
    "emotiv": "Subjective"
   }
  },
  "a6": {
   "s": "Aesthetic experience",
   "map": {
    "perception": "Perception",
    "pleasure": "Pleasure",
    "unique": "Sui generis"
   }
  },
  "l3": {
   "s": "Well-being",
   "map": {
    "same": "Hedonism/experientialism"
   }
  },
  "l3a": {
   "s": "Well-being",
   "map": {
    "desire": "Desire satisfaction",
    "objlist": "Objective list"
   }
  },
  "l7": {
   "s": "Immortality",
   "map": {
    "yes": "Yes",
    "longer": "No",
    "bored": "No",
    "precious": "No"
   }
  },
  "m4a": {
   "s": "Personal identity",
   "map": {
    "both": "Psychological view",
    "neither": "Psychological view",
    "nomatter": "Psychological view"
   }
  },
  "m4b": {
   "s": "Personal identity",
   "map": {
    "body": "Biological view",
    "soul": "Further-fact view"
   }
  },
  "m1d": {
   "s": "Zombies",
   "map": {
    "incoherent": "Inconceivable",
    "imaginable": "Conceivable but not metaphysically possible",
    "possible": "Metaphysically possible"
   }
  },
  "m6": {
   "s": "Chinese room",
   "map": {
    "program": "Understands",
    "split": "Understands",
    "stuff": "Doesn't understand",
    "never": "Doesn't understand"
   }
  },
  "k9g": {
   "s": "Cosmological fine-tuning",
   "map": {
    "design": "Design",
    "multiverse": "Multiverse",
    "brute": "Brute fact",
    "nofine": "No fine-tuning"
   }
  },
  "k9h": {
   "s": "Arguments for theism",
   "map": {
    "cosmo": "Cosmological",
    "design": "Design",
    "onto": "Ontological",
    "moral": "Moral",
    "pragmatic": "Pragmatic"
   }
  },
  "k4a": {
   "s": "External world",
   "map": {
    "ideal": "Idealism"
   }
  },
  "k8a": {
   "s": "Causation",
   "map": {
    "process": "Process/production",
    "powers": "Process/production",
    "primitive": "Primitive"
   }
  },
  "k12": {
   "s": "Material composition",
   "map": {
    "universal": "Universalism",
    "ordinary": "Restrictivism",
    "organic": "Restrictivism",
    "nihil": "Nihilism"
   }
  },
  "k13": {
   "s": "Truth",
   "map": {
    "corresp": "Correspondence",
    "cohere": "Epistemic",
    "pragma": "Epistemic",
    "deflate": "Deflationary"
   }
  },
  "k11": {
   "s": "Analysis of knowledge",
   "map": {
    "jtb": "Justified true belief",
    "basic": "No analysis",
    "track": "Other analysis",
    "defeat": "Other analysis",
    "virtue": "Other analysis",
    "infall": "Other analysis"
   }
  },
  "s8": {
   "s": "Political philosophy",
   "map": {
    "no": "Libertarianism"
   }
  },
  "s8a": {
   "s": "Political philosophy",
   "map": {
    "diff": "Egalitarianism",
    "luck": "Egalitarianism",
    "status": "Egalitarianism",
    "common": "Egalitarianism"
   }
  },
  "s13": {
   "s": "Political philosophy",
   "map": {
    "commun": "Communitarianism"
   }
  },
  "s8b": {
   "s": "Politics",
   "map": {
    "no": "Capitalism",
    "floor": "Capitalism"
   }
  }
 },
 "checks": [
  {
   "tier": 1,
   "a": [
    "e4",
    [
     "nothing"
    ]
   ],
   "b": [
    "e5",
    [
     "yes",
     "construct"
    ]
   ],
   "title": "Nothing is right or wrong, yet some moral claims are true",
   "why": "One answer says no act is really right or wrong. The other says it is true that torturing a child for fun is wrong.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "e4",
    [
     "nothing"
    ]
   ],
   "b": [
    "e1",
    [
     "req"
    ]
   ],
   "title": "Nothing is right or wrong, yet not pulling would be wrong",
   "why": "Calling something wrong doesn’t fit with saying nothing is.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "e4",
    [
     "nothing"
    ]
   ],
   "b": [
    "e2",
    [
     "req"
    ]
   ],
   "title": "Nothing is right or wrong, yet not pushing would be wrong",
   "why": "Calling something wrong doesn’t fit with saying nothing is.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "e5a",
    [
     "error"
    ]
   ],
   "b": [
    "e1",
    [
     "req"
    ]
   ],
   "unless": [
    "e5d",
    [
     "fiction",
     "conserve"
    ]
   ],
   "title": "Moral claims are false, yet not pulling would be wrong",
   "why": "If every moral claim is false, “not pulling would be wrong” is false too.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "e5a",
    [
     "error"
    ]
   ],
   "b": [
    "e2",
    [
     "req"
    ]
   ],
   "unless": [
    "e5d",
    [
     "fiction",
     "conserve"
    ]
   ],
   "title": "Moral claims are false, yet not pushing would be wrong",
   "why": "If every moral claim is false, “not pushing would be wrong” is false too.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "e5",
    [
     "yes"
    ]
   ],
   "b": [
    "e3",
    [
     "nofact"
    ]
   ],
   "title": "Moral facts exist, yet there’s no fact about animals",
   "why": "You said some moral claims are true whatever anyone thinks. Then it needs explaining why this question, unlike torture, has no true answer at all.",
   "type": "conditional",
   "premise": "If any moral claim is objectively true, every moral question has an objectively true answer.",
   "ways": [
    "Reject the premise that every moral question has an answer: some cases may be genuinely open even if torture is wrong.",
    "Say there is a fact here after all.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "e5",
    [
     "yes"
    ]
   ],
   "b": [
    "e6",
    [
     "nofact"
    ]
   ],
   "title": "Moral facts exist, yet there’s no fact about helping",
   "why": "You said some moral claims are true whatever anyone thinks. Then it needs explaining why this question, unlike torture, has no true answer at all.",
   "type": "conditional",
   "premise": "If any moral claim is objectively true, every moral question has an objectively true answer.",
   "ways": [
    "Reject the premise that every moral question has an answer: some cases may be genuinely open even if torture is wrong.",
    "Say there is a fact here after all.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "e5",
    [
     "yes"
    ]
   ],
   "b": [
    "e1",
    [
     "nofact"
    ]
   ],
   "title": "Moral facts exist, yet there’s no fact about the lever",
   "why": "You said some moral claims are true whatever anyone thinks. Then it needs explaining why this case, unlike torture, has no true answer at all.",
   "type": "conditional",
   "premise": "If any moral claim is objectively true, every moral question has an objectively true answer.",
   "ways": [
    "Reject the premise that every moral question has an answer: some cases may be genuinely open even if torture is wrong.",
    "Say there is a fact here after all.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "e5",
    [
     "yes"
    ]
   ],
   "b": [
    "e2",
    [
     "nofact"
    ]
   ],
   "title": "Moral facts exist, yet there’s no fact about the push",
   "why": "You said some moral claims are true whatever anyone thinks. Then it needs explaining why this case, unlike torture, has no true answer at all.",
   "type": "conditional",
   "premise": "If any moral claim is objectively true, every moral question has an objectively true answer.",
   "ways": [
    "Reject the premise that every moral question has an answer: some cases may be genuinely open even if torture is wrong.",
    "Say there is a fact here after all.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 2,
   "a": [
    "e5a",
    [
     "relativism"
    ]
   ],
   "b": [
    "e5c",
    [
     "universal"
    ]
   ],
   "title": "Relativism, yet slavery was wrong everywhere",
   "why": "You said even “torturing a child for fun is wrong” is true only for some cultures. Yet you say slavery was wrong whatever its society approved. If some limits hold for every culture, you need to say why torture isn’t one of them.",
   "ways": [
    "Say some limits hold in every acceptable morality, as David Wong argues.",
    "Say their own deeper values condemned slavery, even if they didn’t see it.",
    "Give up relativism: some moral truths hold for everyone."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e4a",
    [
     "everyone",
     "prior"
    ]
   ],
   "b": [
    "e6",
    [
     "negative"
    ]
   ],
   "title": "Everyone counts equally, yet nothing requires helping",
   "why": "If a stranger’s good counts exactly as much as yours, a holiday can hardly outweigh a life. You can say nothing requires giving only if some acts are optional even when they’re not the best.",
   "ways": [
    "Say the right act only has to be good enough, not the best.",
    "Say you must give after all.",
    "Give the people close to you, including yourself, extra weight."
   ],
   "type": "conditional",
   "premise": "If everyone’s good counts equally, you must always do whatever does the most good."
  },
  {
   "tier": 1,
   "a": [
    "e4f",
    [
     "absolute"
    ]
   ],
   "b": [
    "e2",
    [
     "req",
     "allow"
    ]
   ],
   "title": "Duties are absolute, yet pushing is acceptable",
   "why": "Killing an innocent man to save five is the standard example of what absolutists rule out. If it is on your list of absolute wrongs, pushing can’t be allowed.",
   "type": "conditional",
   "premise": "Killing an innocent person to save others is one of the acts you hold to be wrong whatever the consequences.",
   "ways": [
    "Reject the premise that killing an innocent is on your list, and say which acts are.",
    "Say pushing is wrong after all.",
    "Give up absolutism: say any duty can be outweighed."
   ]
  },
  {
   "tier": 2,
   "a": [
    "e4c",
    [
     "hedon"
    ]
   ],
   "b": [
    "e4d",
    [
     "desire",
     "flourish"
    ]
   ],
   "title": "Pleasure is the good, yet your own good is something else",
   "why": "Both answers are about what makes a life go well for the person living it. Hedonism says only how it feels counts. Your other answer counts real achievements, or wishes actually coming true, which a machine life could feel like without having.",
   "ways": [
    "Reject the premise: say all you really want is good experiences, so the two views agree.",
    "Bring the two into line: pick one theory of well-being.",
    "Treat one answer as a rule of thumb rather than the real theory."
   ],
   "type": "conditional",
   "premise": "What you want, or what thriving needs, includes real things and not just the experience of them."
  },
  {
   "tier": 2,
   "a": [
    "e4c",
    [
     "pref"
    ]
   ],
   "b": [
    "e4d",
    [
     "pleasure",
     "flourish"
    ]
   ],
   "title": "Getting what you want is the good, yet your own good is something else",
   "why": "Both answers are about what makes a life go well for the person living it. Your machine answer says what matters is your wishes actually coming true. Your other answer says your good is pleasure, or rational independence, whatever you happen to want.",
   "ways": [
    "Reject the premise: say what you want just is pleasure, or rational thriving, so the views agree.",
    "Bring the two into line: pick one theory of well-being.",
    "Treat one answer as a rule of thumb rather than the real theory."
   ],
   "type": "conditional",
   "premise": "What you actually want can come apart from pleasure, or from thriving as a rational, independent person."
  },
  {
   "tier": 2,
   "a": [
    "e4c",
    [
     "objlist"
    ]
   ],
   "b": [
    "e4d",
    [
     "pleasure",
     "desire"
    ]
   ],
   "title": "Some things are good whether or not you want them, yet your own good is pleasure or desire",
   "why": "Both answers are about what makes a life go well for the person living it. One says real friendship and knowledge are good for you whether or not you want them. The other says your good is only pleasure, or only what you want.",
   "ways": [
    "Bring the two into line: pick one theory of well-being.",
    "Treat one answer as a rule of thumb rather than the real theory."
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "e4h",
    [
     "command"
    ]
   ],
   "b": [
    "e4t",
    [
     "no"
    ]
   ],
   "title": "God could have commanded otherwise, yet couldn’t command this",
   "why": "You said the command alone makes an act right, so God could have commanded otherwise. Then you said a good God could never command cruelty. If goodness limits what God can command, goodness seems to come first.",
   "ways": [
    "Reject the premise: say God’s freedom to command otherwise doesn’t reach as far as cruelty, and explain why.",
    "Say God’s commands flow from God’s good nature instead.",
    "Accept that a genuine command would make it right.",
    "Say God could, but never would, and explain the difference."
   ],
   "type": "conditional",
   "premise": "If the command alone makes acts right, nothing about cruelty itself could stop God from commanding it."
  },
  {
   "tier": 2,
   "a": [
    "e4w",
    [
     "little"
    ]
   ],
   "b": [
    "e6",
    [
     "strict"
    ]
   ],
   "title": "Little is owed to distant strangers, yet you must give to save them",
   "why": "You said real care needs a relationship, yet that you must keep giving to strangers you will never meet.",
   "ways": [
    "Say the duty to give comes from justice, not care.",
    "Soften the duty to give.",
    "Widen what care can reach."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e6",
    [
     "strict"
    ]
   ],
   "b": [
    "e1",
    [
     "allow"
    ]
   ],
   "title": "You must save a distant stranger, but needn’t pull the lever",
   "why": "You said you must give to save one stranger far away, yet you may leave five people to die in front of you.",
   "ways": [
    "Say pulling is required after all.",
    "Explain why killing the one makes the lever different.",
    "Soften the duty to give."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e6",
    [
     "scalar"
    ]
   ],
   "b": [
    "e1",
    [
     "req"
    ]
   ],
   "title": "No line called “required”, yet not pulling would be wrong",
   "why": "You said there is no line where “required” begins for giving. If that holds for acts in general, “not pulling would be wrong” draws exactly such a line.",
   "ways": [
    "Reject the premise: say giving has no required line, though some acts do.",
    "Read “wrong” as “much worse”.",
    "Accept that some acts are required.",
    "Change your lever answer to permissible."
   ],
   "type": "conditional",
   "premise": "If there is no line where 'required' begins for giving, there is no such line for any act."
  },
  {
   "tier": 2,
   "a": [
    "e4k",
    [
     "doing"
    ]
   ],
   "b": [
    "e1",
    [
     "req"
    ]
   ],
   "title": "Doing harm is worse than allowing it, yet you must pull",
   "why": "Pulling the lever is doing harm to the one person; not pulling only allows the five to die.",
   "ways": [
    "Say the doing/allowing line can be outweighed by numbers.",
    "Change your lever answer.",
    "Explain why redirecting isn’t doing harm."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e4m",
    [
     "stoic"
    ]
   ],
   "b": [
    "l2",
    [
     "yes"
    ]
   ],
   "title": "Virtue is all you need, yet death is bad for you",
   "why": "If nothing outside your character can harm what truly matters, death can’t harm what truly matters either. The Stoics concluded it isn’t bad at all.",
   "ways": [
    "Say death is bad only in a lesser sense.",
    "Accept that death isn’t bad.",
    "Admit a good life needs more than virtue."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e4a",
    [
     "everyone",
     "prior",
     "both"
    ]
   ],
   "b": [
    "e2",
    [
     "wrong"
    ]
   ],
   "unless": [
    [
     "e4b",
     [
      "twolevel",
      "rule"
     ]
    ],
    [
     "e4r",
     [
      "constrained"
     ]
    ]
   ],
   "title": "Results are all that matter, yet pushing is wrong",
   "why": "Pushing produces the same result as the lever: one dies, five live. If only results count, why is pushing wrong?",
   "ways": [
    "Say pushing has worse results in real life (trust, fear, mistakes).",
    "Admit something beyond results matters.",
    "Accept that pushing is allowed in the idealized case."
   ],
   "type": "conditional",
   "premise": "The case is taken as described, with no hidden side effects like fear, lost trust or mistakes."
  },
  {
   "tier": 2,
   "a": [
    "e4a",
    [
     "everyone",
     "prior"
    ]
   ],
   "b": [
    "e1a",
    [
     "protect"
    ]
   ],
   "title": "Everyone counts equally, yet you must save your own child",
   "why": "If a stranger’s good counts exactly as much as yours, five strangers outweigh one child, even your own.",
   "ways": [
    "Say the people close to you count for more after all.",
    "Bite the bullet: pulling is still right.",
    "Say parental love produces the best results overall."
   ],
   "type": "conditional",
   "premise": "What is right in this single case is settled by adding up everyone’s good, with your child counting no more than a stranger."
  },
  {
   "tier": 2,
   "a": [
    "e4a",
    [
     "everyone",
     "prior",
     "both"
    ]
   ],
   "b": [
    "e3",
    [
     "none"
    ]
   ],
   "title": "Everyone’s good counts, but not animals’",
   "why": "If results for everyone are what count, why don’t the animals’ results count? Bentham and Singer pressed exactly this point.",
   "ways": [
    "Count animal suffering after all.",
    "Say what matters is more than suffering, and only humans have it.",
    "Limit “everyone” to beings who can reason, and explain why."
   ],
   "type": "conditional",
   "premise": "What makes anyone’s good count is that they can feel happiness and suffering."
  },
  {
   "tier": 2,
   "a": [
    "e4a",
    [
     "me"
    ]
   ],
   "b": [
    "e1",
    [
     "req"
    ]
   ],
   "title": "Only your own good counts, yet you must save strangers",
   "why": "An egoist owes strangers nothing unless helping them helps you.",
   "ways": [
    "Explain how saving five strangers serves your own good.",
    "Admit others’ good counts too.",
    "Say pulling is allowed but not required."
   ],
   "type": "conditional",
   "premise": "Saving the five does nothing for your own long-run good."
  },
  {
   "tier": 2,
   "a": [
    "e4",
    [
     "exist"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "title": "Values are chosen, yet moral facts exist",
   "why": "If no rules are handed to us, where do objective moral facts come from?",
   "ways": [
    "Say the facts concern how to choose (authentically), not what to choose.",
    "Give up objective moral facts.",
    "Treat chosen values as answerable to deeper facts."
   ],
   "type": "conditional",
   "premise": "If what you choose to stand for decides what’s right, then rightness depends on someone’s choice."
  },
  {
   "tier": 2,
   "a": [
    "e5d",
    [
     "abolish"
    ]
   ],
   "b": [
    "e4",
    [
     "results",
     "duties",
     "virtue",
     "care",
     "plural"
    ]
   ],
   "title": "Drop moral talk, yet a firm theory of right action",
   "why": "You’d have us stop talking as if anything were right or wrong, yet you hold a theory of what makes acts right.",
   "ways": [
    "Treat your theory as a guide to what you want, not to what’s right.",
    "Treat it as a morality we invent, not one we find (John Mackie’s own move).",
    "Accept some form of moral truth."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e5e",
    [
     "emotiv"
    ]
   ],
   "b": [
    "e4",
    [
     "results",
     "duties",
     "virtue",
     "plural"
    ]
   ],
   "challenge": true,
   "title": "Moral views are just feelings, yet one theory is right",
   "why": "If moral attitudes are like preferring tea to coffee, what makes your theory better than any other?",
   "ways": [
    "Say some attitudes are better informed and more consistent (quasi-realism).",
    "Hold your theory as a preference you’d like others to share.",
    "Accept some form of moral truth."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a1",
    [
     "thing"
    ]
   ],
   "b": [
    "e5",
    [
     "no"
    ]
   ],
   "challenge": true,
   "title": "Beauty is objective, but morality isn’t",
   "why": "Why would beauty be out there in the world, but not right and wrong? Philosophers call this a “companions in guilt” argument.",
   "ways": [
    "Explain what makes beauty different from goodness.",
    "Accept that morality might be objective too.",
    "Accept that beauty might be in us after all."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a3",
    [
     "moralism"
    ]
   ],
   "b": [
    "e4",
    [
     "nothing"
    ]
   ],
   "title": "Immoral art is bad art, yet nothing is morally wrong",
   "why": "If nothing is morally wrong, art can’t be bad for being immoral.",
   "ways": [
    "Say “immoral” art fails for another reason, such as being false to life.",
    "Give up moral skepticism.",
    "Let artistic and moral value come apart."
   ],
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "l2b",
    [
     "after"
    ]
   ],
   "title": "The mind is only the brain, yet you live on after death",
   "why": "If the mind is just the brain at work, it’s unclear what could continue once the brain stops.",
   "ways": [
    "Allow something non-physical to survive.",
    "Drop the afterlife.",
    "Explain survival without a soul, such as bodily resurrection."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m4",
    [
     "nofact"
    ]
   ],
   "b": [
    "l2a",
    [
     "depriv"
    ]
   ],
   "title": "Identity is just a word, yet death is fully bad",
   "why": "If there’s no deep fact about whether a future person is you, death may be less of a loss than it feels. Parfit said accepting this made him care less about his own death.",
   "ways": [
    "Accept that death is somewhat less bad than it feels.",
    "Hold that what matters (continuity) is still lost.",
    "Reconsider the identity view."
   ],
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "e4e",
    [
     "divine"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "title": "Duties come from God, yet there’s no God",
   "why": "You said your duties come from God’s commands or God’s design. If there is no God, they have no source, which makes you a moral skeptic without noticing.",
   "ways": [
    "Find another source for duties.",
    "Reconsider God.",
    "Accept moral skepticism."
   ],
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "a4",
    [
     "express"
    ]
   ],
   "b": [
    "a9",
    [
     "yes"
    ]
   ],
   "title": "Art expresses its maker’s feelings, yet an AI image is art whatever made it",
   "why": "If being art means expressing the maker’s feelings, an image from something with no feelings can’t be art just by looking like art.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "a7",
    [
     "same"
    ]
   ],
   "b": [
    "a2",
    [
     "skill"
    ]
   ],
   "title": "Greatness is achievement, yet a perfect fake is just as good",
   "why": "If what makes art great is the skill, daring and originality behind it, copying another painter’s invented style 300 years later is a smaller achievement, and so a lesser work.",
   "ways": [
    "Say the forger’s skill was a real achievement too.",
    "Say the fake is worse as an achievement, though it looks the same.",
    "Locate greatness in how the work looks."
   ],
   "type": "conditional",
   "premise": "Being good as a painting and being great as a work of art are the same thing."
  },
  {
   "tier": 1,
   "a": [
    "a2",
    [
     "onlyform"
    ]
   ],
   "b": [
    "a3",
    [
     "moralism",
     "ethicism",
     "immoral2"
    ]
   ],
   "title": "Only form makes art great, yet a work’s morals change how good it is as art",
   "why": "You said what a work shows or teaches adds nothing to its greatness as art. Then the moral attitude it shows or invites can’t make it better or worse as art.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "a2",
    [
     "moral"
    ]
   ],
   "b": [
    "a3",
    [
     "autonomy"
    ]
   ],
   "title": "Art is great for making people better, yet a moral flaw doesn’t count against it",
   "why": "If a work’s greatness lies in what it does for people’s character and lives, then a work that invites cruelty or approval of evil fails at exactly what makes art great.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "a2",
    [
     "moral"
    ]
   ],
   "b": [
    "a3",
    [
     "immoral2"
    ]
   ],
   "title": "Art is great for making people better, yet a moral flaw can make it greater",
   "why": "If a work’s greatness lies in what it does for people’s character, how can inviting them to enjoy what is wrong be a merit, unless the lesson outweighs the invitation every time?",
   "ways": [
    "Say the flaw makes people better by showing them their own weakness.",
    "Allow moral flaws to count against a work after all.",
    "Locate greatness in insight rather than improvement."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a1a",
    [
     "none"
    ]
   ],
   "b": [
    "a8",
    [
     "higher"
    ]
   ],
   "challenge": true,
   "title": "No taste is better, yet a symphony outranks a pop song",
   "why": "If no one’s taste is better than anyone else’s, the listener who prefers pop isn’t missing anything, so what makes the symphony greater?",
   "ways": [
    "Say the ranking is only your own preference.",
    "Allow that some judges see more than others.",
    "Say pop and symphony are simply different, not ranked."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a1c",
    [
     "emotiv"
    ]
   ],
   "b": [
    "a8",
    [
     "higher"
    ]
   ],
   "challenge": true,
   "title": "No taste is better, yet a symphony outranks a pop song",
   "why": "If reactions to art are like preferring tea to coffee, the listener who prefers pop isn’t missing anything, so what makes the symphony greater?",
   "ways": [
    "Say the ranking is only your own preference.",
    "Allow that some judges see more than others.",
    "Say pop and symphony are simply different, not ranked."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a6",
    [
     "none"
    ]
   ],
   "b": [
    "a4",
    [
     "aesthetic"
    ]
   ],
   "challenge": true,
   "title": "No special aesthetic experience, yet art is made for one",
   "why": "If there’s no distinct aesthetic experience, it’s unclear what art is supposedly made to give. George Dickie, who doubted the aesthetic attitude, defined art by the art world instead.",
   "ways": [
    "Define art by its place in the art world instead.",
    "Accept a distinct aesthetic experience after all.",
    "Say art is made for ordinary attention and enjoyment, and explain what sets it apart."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a5",
    [
     "reader"
    ]
   ],
   "b": [
    "a9",
    [
     "no"
    ]
   ],
   "title": "Readers make a work’s meaning, yet art needs someone who means something",
   "why": "If a work’s meaning comes from its words or its readers rather than its maker, why must there be a maker who means anything at all?",
   "ways": [
    "Say a maker is needed for something to be art, though not for what it means.",
    "Allow that AI images can be art.",
    "Give the artist’s intention more weight in meaning."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a7",
    [
     "same"
    ]
   ],
   "b": [
    "a9",
    [
     "no"
    ]
   ],
   "title": "A perfect fake is just as good, yet an AI image isn’t art",
   "why": "If only how a picture looks matters to its value, it is odd that who or what made it decides whether it is art at all.",
   "ways": [
    "Separate being art (needs a maker) from being good (needs only looks).",
    "Allow that AI images can be art.",
    "Say a fake is worse after all."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a7",
    [
     "same"
    ]
   ],
   "b": [
    "a4a",
    [
     "meaning"
    ]
   ],
   "title": "Look-alikes can be different works, yet a perfect fake is just as good",
   "why": "Arthur Danto held that two things that look exactly alike can be different works with different meanings. Then a fake that only looks like a Vermeer may lack what made the Vermeer good.",
   "ways": [
    "Say meaning makes something art, but only looks make it good.",
    "Say the fake is a different and lesser work.",
    "Define art by status or history instead."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a8",
    [
     "social"
    ]
   ],
   "b": [
    "a1",
    [
     "thing"
    ]
   ],
   "title": "Beauty is in things, yet rankings of art only track class",
   "why": "If beauty is really in things, some rankings of art should track it, not just social status.",
   "ways": [
    "Say only some rankings are social, and real beauty underlies others.",
    "Accept that beauty depends on us after all.",
    "Say beauty is objective but greatness in art is not."
   ],
   "type": "tension",
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "a2",
    [
     "insight"
    ]
   ],
   "b": [
    "a3",
    [
     "autonomy"
    ]
   ],
   "title": "Art is great for showing truths about life, yet moral flaws never matter",
   "why": "If a work’s greatness lies partly in what it shows about people, a work that presents cruelty as admirable seems to show something false, which would be an artistic flaw.",
   "ways": [
    "Say a work can show truths even while endorsing a false attitude.",
    "Allow moral flaws to count sometimes.",
    "Locate greatness somewhere other than insight."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e5",
    [
     "yes"
    ]
   ],
   "b": [
    "a1",
    [
     "us",
     "neither"
    ]
   ],
   "unless": [
    [
     "a1a",
     [
      "better",
      "kant"
     ]
    ],
    [
     "a1c",
     [
      "quasi"
     ]
    ]
   ],
   "challenge": true,
   "title": "Morality is objective, but beauty isn’t",
   "why": "People disagree about right and wrong as much as about beauty, and both rest partly on feeling. If that doesn’t make morality subjective, why does it make beauty subjective?",
   "ways": [
    "Explain what makes morality different from beauty.",
    "Accept that beauty might be objective too.",
    "Accept that morality might depend on us after all."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a3",
    [
     "moralism",
     "ethicism"
    ]
   ],
   "b": [
    "e4",
    [
     "nothing"
    ]
   ],
   "title": "Immoral art is bad art, yet nothing is morally wrong",
   "why": "If nothing is morally wrong, art can’t be worse for being immoral.",
   "ways": [
    "Say “immoral” art fails for another reason, such as being false to life.",
    "Give up moral skepticism.",
    "Let artistic and moral value come apart."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a2",
    [
     "onlyform"
    ]
   ],
   "b": [
    "a3",
    [
     "moderate"
    ]
   ],
   "title": "Only form makes art great, yet a moral flaw can spoil a work",
   "why": "On your “sometimes” answer, a flaw spoils a work when decent viewers can’t respond as it asks. That is about feeling and attitude, not about how its shapes or sounds fit together.",
   "ways": [
    "Say the spoiled response is a failure of form after all.",
    "Let more than form count.",
    "Say moral flaws never matter to art."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a2",
    [
     "onlyform"
    ]
   ],
   "b": [
    "a7",
    [
     "context"
    ]
   ],
   "title": "Only form matters, yet a perfect fake is a different work",
   "why": "If greatness lies only in form, and the fake has exactly the same form, it can’t be a lesser work. Your answer suggests it is, since it only echoes what the original said.",
   "ways": [
    "Say the fake is a different work, but just as great.",
    "Let more than form count.",
    "Say the fake is just as good."
   ],
   "type": "conditional",
   "premise": "Calling the fake a different work means calling it a lesser one."
  },
  {
   "tier": 2,
   "a": [
    "a4",
    [
     "artworld"
    ]
   ],
   "b": [
    "a9",
    [
     "yes"
    ]
   ],
   "title": "Art status comes from the art world, yet an AI image is art whatever made it",
   "why": "Art-world theories make a thing’s origin and context decide whether it is art. Saying where an image came from doesn’t matter cuts against that.",
   "ways": [
    "Say an AI image becomes art once the art world takes it up.",
    "Let looks count after all.",
    "Say the person who prompts is the artist."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a1c",
    [
     "quasi"
    ]
   ],
   "b": [
    "e5e",
    [
     "emotiv"
    ]
   ],
   "title": "Some reactions to beauty are better, but no moral attitude is",
   "why": "Both are expressions of feeling on your view. If careful, informed reactions to beauty can be better, why not careful, informed moral attitudes?",
   "ways": [
    "Explain what makes beauty different from morality.",
    "Allow that some moral attitudes are better too.",
    "Say no reaction to beauty is better either."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a1c",
    [
     "emotiv"
    ]
   ],
   "b": [
    "e5e",
    [
     "quasi"
    ]
   ],
   "title": "Some moral attitudes are better, but no reaction to beauty is",
   "why": "Both are expressions of feeling on your view. If careful, informed moral attitudes can be better, why not careful, informed reactions to beauty?",
   "ways": [
    "Explain what makes morality different from beauty.",
    "Allow that some reactions to beauty are better too.",
    "Say no moral attitude is better either."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a2",
    [
     "exper"
    ]
   ],
   "b": [
    "a6",
    [
     "none"
    ]
   ],
   "title": "Greatness is the experience a work gives, yet there’s no special aesthetic experience",
   "why": "If the experience is just ordinary attention and enjoyment, a work’s greatness is just how much it is enjoyed, and a catchy jingle may beat a great quartet.",
   "ways": [
    "Accept a distinct aesthetic experience.",
    "Say greatness is ordinary enjoyment, ranked by richness.",
    "Locate greatness in the work, not the experience."
   ],
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "a5",
    [
     "actual"
    ]
   ],
   "b": [
    "a9",
    [
     "yes"
    ]
   ],
   "title": "The artist’s intention fixes meaning, yet an AI image is art with no artist",
   "why": "If meaning comes from what the maker meant, an artwork with no maker means nothing. Can something be art and mean nothing?",
   "ways": [
    "Say art needn’t mean anything.",
    "Say the prompter’s intention counts.",
    "Deny the image is art."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "a1b",
    [
     "higher"
    ]
   ],
   "b": [
    "a3",
    [
     "autonomy"
    ]
   ],
   "title": "Beauty reflects a perfect Beauty beyond the world, yet a work can be morally ugly and artistically great",
   "why": "For Plato and Plotinus, Beauty itself is bound up with the Good. Art that is morally ugly would then fall short of beauty.",
   "ways": [
    "Separate Beauty from the Good.",
    "Allow moral flaws to count.",
    "Say artistic greatness isn’t about beauty."
   ],
   "type": "conditional",
   "premise": "Beauty itself is bound up with the Good, and artistic greatness is a matter of beauty."
  },
  {
   "tier": 2,
   "a": [
    "a7",
    [
     "same"
    ]
   ],
   "b": [
    "a2",
    [
     "feeling"
    ]
   ],
   "title": "A perfect fake is just as good, yet art is great for expressing a feeling truly",
   "why": "The forger felt nothing of what Vermeer felt. If the fake is just as good, the truth of the feeling behind it can’t be what makes a work great.",
   "ways": [
    "Say the feeling lives in the picture, whoever painted it.",
    "Say the fake is worse after all.",
    "Locate greatness in how the work looks."
   ],
   "type": "tension"
  },
  {
   "tier": 1,
   "a": [
    "l5",
    [
     "end"
    ]
   ],
   "b": [
    "l2b",
    [
     "after"
    ]
   ],
   "title": "You live on after death, yet death is the end of you",
   "why": "You said death isn’t bad because you live on, but also that death is simply the end.",
   "unless": [
    [
     "l5",
     [
      "soul",
      "resur",
      "rebirth",
      "merge"
     ]
    ]
   ],
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "l6",
    [
     "hope"
    ]
   ],
   "b": [
    "l5",
    [
     "end"
    ]
   ],
   "title": "Prepare for what comes after, yet nothing comes after",
   "why": "Preparing for life after death makes sense only if something of you continues. You said you simply end.",
   "unless": [
    [
     "l5",
     [
      "soul",
      "resur",
      "rebirth",
      "merge"
     ]
    ]
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "l2c",
    [
     "sym"
    ]
   ],
   "b": [
    "l2",
    [
     "yes"
    ]
   ],
   "title": "Death is bad for you, yet no worse than the time before you were born",
   "why": "This is Lucretius’ mirror argument. He used it to show that being dead is nothing to fear. If it persuades you, it pulls against your answer that death is bad for the one who dies.",
   "challenge": true,
   "ways": [
    "Death takes a future; the time before birth took nothing you could have had",
    "Accept Lucretius: being dead is not bad for the one who dies",
    "Both are losses after all"
   ],
   "type": "conditional",
   "premise": "The time before you were born was not bad for you."
  },
  {
   "tier": 2,
   "a": [
    "l1a",
    [
     "god"
    ]
   ],
   "b": [
    "k9",
    [
     "no",
     "nomeaning"
    ]
   ],
   "title": "Meaning comes from God, yet there’s no God",
   "why": "If meaning comes from God, and there is no God (or the question has no clear meaning), it seems no life has meaning.",
   "ways": [
    "Meaning could come from a life after death without a God",
    "Life has no meaning after all",
    "Meaning has a source besides God"
   ],
   "type": "conditional",
   "premise": "The source of meaning you picked needs God, rather than an afterlife without one."
  },
  {
   "tier": 2,
   "a": [
    "l1g",
    [
     "novalue"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "title": "Nothing is really valuable, yet moral facts exist",
   "why": "You said value is only projected onto the world, but also that moral truths hold whatever anyone thinks.",
   "ways": [
    "Moral facts are about right and wrong, not about value in a life",
    "Moral claims aren’t objective facts after all",
    "Something can be valuable after all"
   ],
   "type": "conditional",
   "premise": "Moral wrongness is a kind of value, so if value is projected, so is wrongness."
  },
  {
   "tier": 2,
   "a": [
    "l3",
    [
     "same"
    ]
   ],
   "b": [
    "e4c",
    [
     "pref",
     "objlist"
    ]
   ],
   "title": "Unreal experiences would not be enough, yet the deceived man lost nothing",
   "why": "In Ethics you refused the experience machine because more than feelings matters. Here you said the deceived man’s life went just as well as a real one.",
   "ways": [
    "The machine is a choice you make; the man was fooled",
    "His life did go worse",
    "Plugging in would be fine after all"
   ],
   "type": "conditional",
   "premise": "Your reason for refusing the machine is a claim about what makes a life go well, not just about what you’d choose."
  },
  {
   "tier": 2,
   "a": [
    "l3",
    [
     "worse"
    ]
   ],
   "b": [
    "e4c",
    [
     "hedon"
    ]
   ],
   "title": "Feelings are all that count, yet the deceived man lost something",
   "why": "In Ethics you said a perfect simulated life is just as good. Here you said a man fooled about his life is worse off, though it all felt the same.",
   "ways": [
    "Being deceived by people is different from choosing a machine",
    "His life went just as well",
    "The machine life would be worse"
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "l3a",
    [
     "objlist",
     "hybrid"
    ]
   ],
   "b": [
    "e4c",
    [
     "pref"
    ]
   ],
   "title": "Getting what you want is the good, yet the TV watcher is missing out",
   "why": "In Ethics you said what matters is that your wishes come true. Here, a man whose wishes all come true is not doing as well as he could.",
   "ways": [
    "Reject the premise: say refusing the machine shows only that real things matter, not that wanting them is what makes them good.",
    "Real wishes are what you’d want if you thought harder",
    "His life is going as well as it could",
    "Some goods matter whatever you want"
   ],
   "type": "conditional",
   "premise": "Your machine answer is a full theory of well-being: getting what you actually want is what makes a life go well."
  },
  {
   "tier": 2,
   "a": [
    "l3a",
    [
     "desire"
    ]
   ],
   "b": [
    "e4c",
    [
     "objlist"
    ]
   ],
   "title": "Some goods matter whatever you want, yet the TV watcher lacks nothing",
   "why": "In Ethics you said friendship and knowledge are good whether or not you want them. Here, a man without them is doing as well as he could.",
   "ways": [
    "His choice is what makes it his best life",
    "He is missing out after all",
    "Good means what you want after all"
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "l3",
    [
     "worse"
    ]
   ],
   "b": [
    "e4d",
    [
     "pleasure"
    ]
   ],
   "title": "Your good is pleasure, yet the deceived man lost something",
   "why": "In Ethics you said your own good is pleasure and freedom from pain. Here you said a man fooled about his life is worse off, though it all felt the same to him.",
   "ways": [
    "Reject the premise: explain why your own good is pleasure while his is not.",
    "Being deceived by people harms you in a way pleasure can’t capture",
    "His life went just as well",
    "Your own good is more than pleasure"
   ],
   "type": "conditional",
   "premise": "What makes a life go well is the same kind of thing for him as for you."
  },
  {
   "tier": 2,
   "a": [
    "l3a",
    [
     "objlist"
    ]
   ],
   "b": [
    "e4d",
    [
     "desire"
    ]
   ],
   "title": "Your good is getting what you want, yet the TV watcher is missing out",
   "why": "In Ethics you said your own good is getting whatever you actually want. Here, a man who gets exactly what he wants is not doing as well as he could.",
   "ways": [
    "Reject the premise: explain why your own good is what you want while his is not.",
    "Real wants are what you’d want if you thought harder",
    "His life is going as well as it could",
    "Some goods matter whatever you want"
   ],
   "type": "conditional",
   "premise": "What makes a life go well is the same kind of thing for him as for you."
  },
  {
   "tier": 2,
   "a": [
    "l2b",
    [
     "epicur"
    ]
   ],
   "b": [
    "l3",
    [
     "worse"
    ]
   ],
   "challenge": true,
   "title": "Nothing is bad for you once you’re gone, yet an unfelt betrayal is",
   "why": "This is Thomas Nagel’s argument. You said the deceived man was harmed by things he never experienced. So not feeling your death can’t be why it is harmless; you need another reason, such as that the dead no longer exist.",
   "ways": [
    "The man existed while betrayed; the dead don’t exist at all",
    "Death can be bad after all",
    "The man wasn’t harmed after all"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l7",
    [
     "yes"
    ]
   ],
   "b": [
    "l2b",
    [
     "epicur"
    ]
   ],
   "title": "Death is nothing to you, yet you’d escape it forever",
   "why": "Epicurus taught that seeing death as nothing to us removes the longing for immortality. You hold the first but not the second.",
   "ways": [
    "More good life is worth wanting even if missing it isn’t bad",
    "Death is bad after all",
    "No need to live forever"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l7",
    [
     "bored",
     "precious"
    ]
   ],
   "b": [
    "l5",
    [
     "soul",
     "resur"
    ]
   ],
   "title": "Endless life would be bad, yet you expect one",
   "why": "You turned down endless life, but you expect to live on forever after death.",
   "ways": [
    "Eternal life with God is not ordinary life made longer",
    "Endless life could be good after all",
    "The afterlife won’t last forever"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l7",
    [
     "yes"
    ]
   ],
   "b": [
    "l8",
    [
     "harm"
    ]
   ],
   "title": "Being born is always a harm, yet you’d choose to live forever",
   "why": "If every life is a net harm to start, it’s hard to see why an endless one would be good to have.",
   "ways": [
    "Benatar: a life not worth starting can still be worth continuing",
    "Being born can be good after all",
    "Endless life would not be good"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l6",
    [
     "calm"
    ]
   ],
   "b": [
    "l2",
    [
     "yes"
    ]
   ],
   "title": "Death is bad for you, yet nothing to worry about",
   "why": "Epicurean calm rests on death being nothing to you. You said death is bad for the one who dies.",
   "ways": [
    "Worry doesn’t help, even about real losses",
    "Accept the Epicurean view: being dead is not bad for the one who dies",
    "Some concern about death is fitting"
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "l6",
    [
     "resist"
    ]
   ],
   "b": [
    "l7",
    [
     "bored",
     "precious"
    ]
   ],
   "title": "Fight death, yet endless life would be bad",
   "why": "You want death defeated, but you would refuse to live forever.",
   "ways": [
    "Defeat early death, not all death",
    "Endless life would be good",
    "Death is natural; we should not try to abolish it"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l5",
    [
     "soul"
    ]
   ],
   "b": [
    "m1",
    [
     "yes"
    ]
   ],
   "title": "The mind is only the brain, yet your soul lives on",
   "why": "If your mind is your brain at work, it’s hard to see what survives when the brain stops.",
   "ways": [
    "The soul is something besides the mind",
    "The mind isn’t only physical",
    "Nothing survives death"
   ],
   "type": "conditional",
   "premise": "If you survive as a soul, your thoughts and feelings go on without your brain."
  },
  {
   "tier": 2,
   "a": [
    "l2b",
    [
     "after"
    ]
   ],
   "b": [
    "m1",
    [
     "yes"
    ]
   ],
   "title": "The mind is only the brain, yet you live on after death",
   "why": "If your mind is your brain at work, it’s hard to see what survives when the brain stops.",
   "ways": [
    "You could be raised again with a new body",
    "The mind isn’t only physical",
    "Nothing survives death"
   ],
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "l2a",
    [
     "depriv"
    ]
   ],
   "b": [
    "m4",
    [
     "nofact"
    ]
   ],
   "title": "Identity is just a word, yet death is fully bad",
   "why": "If there’s no fact about whether a future person is you, it’s unclear whose loss death is. Parfit said accepting this made him less troubled by his own death.",
   "ways": [
    "What matters is the loss of a good future, whoever has it",
    "Personal identity is a real fact",
    "Accept Parfit’s view: if identity is not what matters, death is a smaller loss"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l2b",
    [
     "noself"
    ]
   ],
   "b": [
    "m2",
    [
     "yes"
    ]
   ],
   "title": "There’s no lasting self to lose, yet you have a self",
   "why": "In Mind you said there is a single self that is you. Here you said death isn’t bad because there was never a lasting self to lose.",
   "ways": [
    "The self is real but doesn’t last",
    "There is no single self after all",
    "Death takes something real from you"
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "l2",
    [
     "yes"
    ]
   ],
   "b": [
    "e4m",
    [
     "stoic"
    ]
   ],
   "title": "Virtue is all you need, yet death is bad for you",
   "why": "If nothing outside your character can harm what truly matters, death can’t harm you either.",
   "ways": [
    "Death is bad, but not a harm to what matters most",
    "Virtue isn’t quite all you need",
    "Accept the Stoic view: death is not bad for the one who dies"
   ],
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "l2c",
    [
     "asym"
    ]
   ],
   "b": [
    "l2",
    [
     "no"
    ]
   ],
   "title": "Death takes away your future, yet it isn’t bad for you",
   "why": "You said death differs from the time before birth because it takes away a future. Losing a good future sounds like a harm.",
   "ways": [
    "Losing a future isn’t a harm if no one is left to lose it (Epicurus)",
    "Death is bad after all",
    "Death and the time before birth are alike"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l2c",
    [
     "bothbad"
    ]
   ],
   "b": [
    "l2",
    [
     "no"
    ]
   ],
   "title": "Missing earlier years was bad for you, yet death isn’t",
   "why": "You said not being born sooner cost you good years. Death costs you later years in the same way, so it seems it should be bad too.",
   "ways": [
    "Reject the premise: explain why missing earlier years is a loss but missing later ones isn’t.",
    "Death is bad after all",
    "The time before birth wasn’t bad either",
    "Missing years is only bad when someone is there to miss them"
   ],
   "type": "conditional",
   "premise": "Missing out on good years is bad for you whether the years come before your life or after it."
  },
  {
   "tier": 2,
   "a": [
    "l2b",
    [
     "noself"
    ]
   ],
   "b": [
    "l5",
    [
     "soul",
     "resur"
    ]
   ],
   "title": "There’s no lasting self, yet your soul lives on",
   "why": "You said death isn’t bad because there was never a lasting self, but also that your soul survives.",
   "ways": [
    "What survives is not a self in the everyday sense",
    "There is a lasting self after all",
    "Nothing like a soul survives"
   ],
   "type": "conditional",
   "premise": "A soul that carries you on after death is a lasting self."
  },
  {
   "tier": 2,
   "a": [
    "l6",
    [
     "resist"
    ]
   ],
   "b": [
    "l2",
    [
     "no"
    ]
   ],
   "title": "Death is an enemy, yet not bad for the one who dies",
   "why": "You want death fought and defeated, but you said it isn’t bad for the person who dies.",
   "ways": [
    "Death is bad for those left behind, not the one who dies",
    "Death is bad after all",
    "Death is natural; we should not try to abolish it"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l2b",
    [
     "after"
    ]
   ],
   "b": [
    "l5",
    [
     "unsure"
    ]
   ],
   "title": "You live on after death, yet you don’t lean either way",
   "why": "You said death isn’t bad because you live on, but also that no one can know what happens and you don’t lean either way.",
   "ways": [
    "I believe it without claiming to know it",
    "I don’t know that I live on",
    "I do lean toward an afterlife"
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "l8",
    [
     "harm"
    ]
   ],
   "b": [
    "l2",
    [
     "no"
    ]
   ],
   "title": "Starting a life harms the child, yet death harms no one",
   "why": "Benatar, the best-known anti-natalist, also holds that death is a serious harm: once someone exists, they have an interest in going on.",
   "ways": [
    "Benatar’s view: death is bad too, so a life already begun is worth continuing",
    "Being born can be good after all",
    "Starting and ending a life are different questions"
   ],
   "type": "tension",
   "retired": true
  },
  {
   "tier": 1,
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "m1d",
    [
     "possible"
    ]
   ],
   "challenge": true,
   "title": "Your mind is only physical, yet a physical copy could feel nothing",
   "why": "If an atom-for-atom copy of you could lack experience, then experience is something over and above the atoms, and the mind is more than the brain. This is David Chalmers’ “zombie” argument.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "m1a",
    [
     "function"
    ]
   ],
   "b": [
    "m6",
    [
     "never"
    ]
   ],
   "title": "Anything that does pain’s job is pain, yet no machine could have a mind",
   "why": "Functionalism says the job matters, not the material. A machine that did the job would have the mind.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "m4b",
    [
     "soul"
    ]
   ],
   "title": "The mind is only physical, yet a soul keeps you you",
   "why": "Physicalism says nothing beyond the brain is needed for your mind. A soul that keeps you you would then be a non-physical part of you that does no thinking or feeling, which is hard to make sense of.",
   "type": "conditional",
   "premise": "A soul, if you have one, is part of what thinks and feels in you.",
   "ways": [
    "Reject the premise: say the soul is not part of your mind, and explain what it does.",
    "Drop the soul view of identity.",
    "Drop physicalism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "m2",
    [
     "no"
    ]
   ],
   "b": [
    "m4b",
    [
     "soul"
    ]
   ],
   "title": "There’s no single self, yet the same soul keeps you you",
   "why": "A soul is just the kind of single, lasting self you said isn’t there.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "m2a",
    [
     "simple"
    ]
   ],
   "title": "The mind is physical, yet the self is a soul-like thing",
   "why": "Physicalism says your brain does your thinking, and your brain has billions of parts. The simple self says what does your thinking has no parts at all.",
   "ways": [
    "Say the simple self is the whole person, not an extra thing.",
    "Treat the self as a brain process or a story.",
    "Say the mind is more than the brain."
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "m2a",
    [
     "witness"
    ]
   ],
   "title": "The mind is the brain at work, yet the self is awareness that never changes",
   "why": "The brain never stops changing. If the mind is just what the brain does, it’s hard to see what in it could stay exactly the same.",
   "ways": [
    "Say the unchanging awareness is a feature of how the brain models itself, not a thing.",
    "Allow that awareness isn’t physical.",
    "Reconsider the witness self."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m1c",
    [
     "epiphen"
    ]
   ],
   "b": [
    "m1b",
    [
     "propdual",
     "soul",
     "form"
    ]
   ],
   "title": "Your feelings make nothing happen, yet you talk about them",
   "why": "If pain causes nothing, it can’t cause you to say “I’m in pain.” Then your words about your experiences aren’t caused by those experiences at all.",
   "ways": [
    "Say your words are caused by brain states that run alongside your feelings.",
    "Let feelings cause things after all.",
    "Give up the idea that feelings just ride along."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m1a",
    [
     "identity"
    ]
   ],
   "b": [
    "m6",
    [
     "program"
    ]
   ],
   "title": "Pain is a particular brain state, yet a program could feel",
   "why": "If pain just is certain nerves firing, a silicon machine has no such nerves, whatever program it runs.",
   "ways": [
    "Reject the premise: say pain is nerves firing in humans, while a machine’s pain could be something else (David Lewis’s view).",
    "Say pain is a pattern of activity that chips could share (the “what it does” view).",
    "Require the machine to be built like a brain.",
    "Give up the idea that pain just is a brain state."
   ],
   "type": "conditional",
   "premise": "A machine that feels pain would have to have pain in the same sense you do, that is, your kind of nerves firing."
  },
  {
   "tier": 2,
   "a": [
    "m1a",
    [
     "function"
    ]
   ],
   "b": [
    "m6",
    [
     "stuff"
    ]
   ],
   "title": "Anything doing the job counts, yet machines need brain-like stuff",
   "why": "Functionalism says the material doesn’t matter. Requiring a brain’s physical powers says it does.",
   "ways": [
    "Say only brain-like stuff can actually do the job.",
    "Accept that the right program would be enough.",
    "Give up the idea that a mind is just what it does."
   ],
   "type": "conditional",
   "premise": "Chips could play pain’s part without having the special physical powers brains have."
  },
  {
   "tier": 2,
   "a": [
    "m1b",
    [
     "soul"
    ]
   ],
   "b": [
    "m6",
    [
     "program"
    ]
   ],
   "title": "Minds are souls, yet a program could have a mind",
   "why": "If a mind needs a non-physical soul, running the right software shouldn’t be enough to produce one.",
   "ways": [
    "Say God or nature could join a soul to a suitable machine.",
    "Say a machine mind would be a different, soulless kind.",
    "Reconsider the soul view."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m6",
    [
     "program"
    ]
   ],
   "b": [
    "m4",
    [
     "someone"
    ]
   ],
   "title": "A program could be a mind, yet a perfect copy of you isn’t you",
   "why": "Not a contradiction, but a stance on mind uploading: if the right information processing makes a mind, why isn’t the copy that carries all of yours still you? (In the 2020 PhilPapers survey, most philosophers said uploading would mean death.)",
   "ways": [
    "Say a copy can be a mind without being the same mind.",
    "Say the copy is you after all.",
    "Require the same body or brain for minds too."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m1c",
    [
     "epiphen",
     "parallel"
    ]
   ],
   "b": [
    "m3",
    [
     "libert"
    ]
   ],
   "title": "Your feelings never move your body, yet your choices are open and free",
   "why": "If your conscious thoughts never move your body, the deliberation you feel can’t be what settles what you do.",
   "ways": [
    "Say the freedom lies in brain events, not in what you feel.",
    "Let feelings cause things after all.",
    "Say free will doesn’t need an open replay."
   ],
   "type": "conditional",
   "premise": "Free will requires that your conscious deliberation is what causes your action."
  },
  {
   "tier": 2,
   "a": [
    "m2a",
    [
     "simple"
    ]
   ],
   "b": [
    "m4",
    [
     "nofact"
    ]
   ],
   "title": "A single simple self, yet no fact about the teleporter",
   "why": "If you are one simple thing, it either went to Mars or it didn’t. Swinburne argues just this.",
   "ways": [
    "Say there is a fact, but we can’t know it.",
    "Treat the self as something less than a simple thing.",
    "Reconsider the no-fact view."
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "m2a",
    [
     "simple"
    ]
   ],
   "b": [
    "m4",
    [
     "you"
    ]
   ],
   "title": "A soul-like self, yet a copy from new matter is you",
   "why": "The machine copied your body and memories. Did it copy the soul too?",
   "ways": [
    "Say the soul goes wherever your memories and character go.",
    "Say the copy is a new person.",
    "Reconsider the simple self."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m3",
    [
     "libert"
    ]
   ],
   "b": [
    "m5",
    [
     "noult"
    ]
   ],
   "title": "Your choice is open, yet no one is ultimately responsible",
   "why": "A main reason to want open choices is that they would let you shape yourself and be ultimately responsible (Kane’s argument).",
   "ways": [
    "Say open choices matter for another reason, such as real creativity.",
    "Say your open choices do shape who you are.",
    "Say free will doesn’t need an open replay."
   ],
   "type": "conditional",
   "premise": "Free will matters because it makes you ultimately responsible for who you become."
  },
  {
   "tier": 2,
   "a": [
    "m2b",
    [
     "noself",
     "conv"
    ]
   ],
   "b": [
    "m5",
    [
     "make"
    ]
   ],
   "title": "There’s no self, yet you make yourself",
   "why": "If there’s no one there, who is doing the making, and who deserves the praise or blame?",
   "ways": [
    "Say the making is done by your choices, with no fixed self behind them (Sartre’s view).",
    "Treat the self as a useful story that can still guide change.",
    "Say there is a self after all."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m3c",
    [
     "classic"
    ]
   ],
   "b": [
    "m3e",
    [
     "no"
    ]
   ],
   "title": "Free means not forced, yet you’re not responsible when nothing forced you",
   "why": "In the device case nothing forced you; you did what you wanted. On your view of freedom, that should be enough.",
   "ways": [
    "Add that freedom needs real alternatives.",
    "Say you are responsible in the device case.",
    "Explain why responsibility needs more than freedom."
   ],
   "type": "conditional",
   "premise": "Being free in the sense you described is all that responsibility requires."
  },
  {
   "tier": 2,
   "a": [
    "m3",
    [
     "libert"
    ]
   ],
   "b": [
    "m5",
    [
     "nothing"
    ]
   ],
   "title": "Your choice is truly open, yet blame only looks forward",
   "why": "If forward-looking reasons are enough to justify blame, the openness you insisted on isn’t doing any work.",
   "ways": [
    "Say openness matters for something other than blame.",
    "Accept that some blame is deserved for what was done, not only for what it will bring.",
    "Say free will doesn’t need an open replay."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "m3b",
    [
     "agent"
    ]
   ],
   "title": "The mind is only physical, yet you as a whole person settle your choice",
   "why": "If the mind is just the brain at work, it’s hard to see what “you as a whole person” adds to the brain events that make up your deciding.",
   "ways": [
    "Say the power to settle choices arises from the brain (Timothy O’Connor’s view).",
    "Say your reasons and effort tip the choice, rather than you directly.",
    "Say the mind is more than the brain."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m1a",
    [
     "folk"
    ]
   ],
   "b": [
    "m5",
    [
     "practice"
    ]
   ],
   "title": "Everyday mind-talk will be replaced, yet resentment and gratitude can’t be overturned",
   "why": "Resentment and gratitude are part of everyday mind-talk. If brain science will replace that talk, it’s unclear why these attitudes would be safe from any theory.",
   "ways": [
    "Say the attitudes will survive in some new, brain-based form.",
    "Limit the replacement to beliefs and desires.",
    "Say science could change how we blame and thank after all."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m2",
    [
     "no"
    ]
   ],
   "b": [
    "m3c",
    [
     "hier"
    ]
   ],
   "title": "There’s no one in particular there, yet freedom is you standing behind your desires",
   "why": "If there’s only a flow of thoughts and feelings, who is it that stands behind one desire and not another?",
   "ways": [
    "Say “standing behind” is just one desire endorsing another, with no self needed.",
    "Pick a view of free choice that doesn’t need a self.",
    "Reconsider the no-self view."
   ],
   "type": "tension"
  },
  {
   "tier": 1,
   "a": [
    "m1a",
    [
     "function"
    ]
   ],
   "b": [
    "m6",
    [
     "split"
    ]
   ],
   "title": "Pain is whatever does pain’s job, yet a machine could do the job without feeling",
   "why": "Functionalism says anything that does pain’s job is pain. A machine that handles information like you would do that job, so by your own theory it would feel too.",
   "ways": [
    "Say feeling, unlike thinking, isn’t a job anything does.",
    "Let the machine feel.",
    "Give up the idea that pain is whatever does pain’s job."
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "m1a",
    [
     "elim"
    ]
   ],
   "b": [
    "m6",
    [
     "split"
    ]
   ],
   "title": "Feeling is an illusion, yet a machine couldn’t have it",
   "why": "If what we call feeling is just the brain representing itself as having an inner glow, a machine that represents itself the same way has everything you have.",
   "ways": [
    "Say the machine would lack the brain’s way of describing itself, not some extra feeling.",
    "Let the machine ‘feel’ in the only sense anyone does.",
    "Give up the idea that the inner glow is a trick."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m1b",
    [
     "propdual"
    ]
   ],
   "b": [
    "m4b",
    [
     "soul"
    ]
   ],
   "title": "No soul in your theory of mind, yet a soul makes you you",
   "why": "You said what isn’t physical is how things feel: a feature the brain gives rise to, not a separate thing. Then there is no soul to carry your identity.",
   "ways": [
    "Pick the body or brain as what keeps you the same.",
    "Accept a soul in your theory of mind.",
    "Say identity is not what matters."
   ],
   "type": "conditional",
   "premise": "Choosing property dualism over substance dualism means you deny there is any non-physical soul."
  },
  {
   "tier": 2,
   "a": [
    "m2a",
    [
     "witness"
    ]
   ],
   "b": [
    "m3b",
    [
     "agent"
    ]
   ],
   "title": "The self only witnesses, yet you settle your choices",
   "why": "Your witness self doesn’t think or choose. Then the one who settles your choices can’t be that self.",
   "ways": [
    "Say the chooser is the mind, not the witness (as Advaita does).",
    "Pick an event-causal view of choice.",
    "Reconsider the witness self."
   ],
   "type": "conditional",
   "premise": "The 'you' that starts your choices is the same as the real you you described."
  },
  {
   "tier": 2,
   "a": [
    "a9",
    [
     "ai"
    ]
   ],
   "b": [
    "m6",
    [
     "never"
    ]
   ],
   "title": "The AI is an artist, yet no machine can have a mind",
   "why": "Being an artist seems to need choices made by someone. If no machine can ever have a mind, it is hard to see whose choices they are.",
   "ways": [
    "Say an artist needs creativity but not a mind.",
    "Allow that machines might have minds.",
    "Say the AI is a tool and the person is the artist."
   ],
   "type": "conditional",
   "premise": "Making creative choices requires having a mind."
  },
  {
   "tier": 2,
   "a": [
    "l2a",
    [
     "depriv",
     "both"
    ]
   ],
   "b": [
    "m2b",
    [
     "bundle",
     "conv",
     "noself"
    ]
   ],
   "title": "There’s no single self, yet death robs you",
   "why": "You said there is no single, lasting self, and that death is bad because it takes your future away. Whose future is lost?",
   "ways": [
    "The loss is of future experiences, not of a self",
    "There is a self after all",
    "Accept the Buddhist view: with no self, death robs no one"
   ],
   "type": "tension"
  },
  {
   "tier": 1,
   "a": [
    "k9k",
    [
     "logical"
    ]
   ],
   "b": [
    "k9a",
    [
     "theism",
     "open"
    ]
   ],
   "title": "Suffering rules God out, yet you believe in a caring God",
   "why": "You said an all-good, all-powerful God and suffering can’t both exist. The God you believe in cares for everyone, and most who believe in such a God also take God to be all-powerful.",
   "type": "conditional",
   "premise": "The caring God you believe in is also all-powerful and all-good.",
   "ways": [
    "Reject the premise: say your God is not all-powerful, or not all-good in the way the argument needs.",
    "Say suffering counts against God without ruling God out.",
    "Rethink one answer."
   ]
  },
  {
   "tier": 1,
   "a": [
    "k9d",
    [
     "fideism"
    ]
   ],
   "b": [
    "k9i",
    [
     "never"
    ]
   ],
   "title": "Your belief rests on faith alone, yet belief needs evidence",
   "why": "You base your belief on faith that doesn’t need reason’s backing, and also say believing without enough evidence is never reasonable. Then, by your own rule, your belief isn’t reasonable.",
   "type": "conditional",
   "premise": "You should not hold a belief you yourself judge unreasonable.",
   "ways": [
    "Reject the premise: say faith is meant to go beyond reason, so it doesn’t need to be reasonable (Kierkegaard’s view).",
    "Say your faith has enough evidence after all.",
    "Rethink one answer."
   ]
  },
  {
   "tier": 1,
   "a": [
    "k9d",
    [
     "arguments",
     "moral"
    ]
   ],
   "b": [
    "k9h",
    [
     "none"
    ]
   ],
   "title": "Your belief rests on arguments, yet no argument has force",
   "why": "You base your belief on reasoning, but say no argument for God has any real force.",
   "unless": [
    [
     "k9",
     [
      "ultimate"
     ]
    ]
   ],
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "k9d",
    [
     "experience"
    ]
   ],
   "b": [
    "k9l",
    [
     "natural",
     "feeling"
    ]
   ],
   "title": "Your belief rests on experience, yet experiences show nothing beyond us",
   "why": "You base your belief on encountering God or the sacred directly, and also say such experiences are produced by the brain, or are only feelings rather than glimpses of anything real.",
   "unless": [
    [
     "k9f",
     [
      "nirvana",
      "dao"
     ]
    ]
   ],
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "k9j",
    [
     "plural"
    ]
   ],
   "b": [
    "k9",
    [
     "no",
     "nomeaning"
    ]
   ],
   "title": "Many paths to one reality, yet no God",
   "why": "Pluralism says religions respond to the same ultimate reality. If your atheism also rules out any sacred ultimate, there is nothing for them to respond to.",
   "type": "conditional",
   "premise": "The ultimate reality pluralism talks about would be God or a god.",
   "ways": [
    "Reject the premise: say the ultimate reality isn’t a god, so atheism leaves room for it (as John Hick’s “Real” does).",
    "Change your God answer to “something ultimate”.",
    "Rethink one answer."
   ]
  },
  {
   "tier": 2,
   "a": [
    "k9j",
    [
     "allfalse"
    ]
   ],
   "b": [
    "k9",
    [
     "yes"
    ]
   ],
   "title": "Every religion’s claims about God are false, yet God exists",
   "why": "If there is a God, at least the religions that say so are right about that.",
   "ways": [
    "No religion is true as a whole, though some are right that God exists",
    "My God is not the God of any religion",
    "Rethink one answer"
   ],
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "k9",
    [
     "no",
     "nomeaning"
    ]
   ],
   "b": [
    "e5b",
    [
     "theistic"
    ]
   ],
   "title": "No God, yet moral facts are grounded in God’s nature",
   "why": "A fact grounded in God’s nature needs there to be a God.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "k9",
    [
     "nomeaning"
    ]
   ],
   "b": [
    "e4e",
    [
     "divine"
    ]
   ],
   "title": "God-talk is meaningless, yet duties come from God",
   "why": "You said duties come “from God: God’s commands, or the moral order God built into human nature”. If “God exists” has no clear meaning, neither can that.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "k9k",
    [
     "logical"
    ]
   ],
   "b": [
    "k9",
    [
     "agnostic"
    ]
   ],
   "title": "Suffering rules God out, yet you don’t lean either way",
   "why": "If suffering proves there is no all-good, all-powerful God, then the question isn’t balanced or beyond knowing, at least about that God.",
   "ways": [
    "The reasons can be balanced even if one argument is strong",
    "Another kind of god is still open",
    "Rethink one answer"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k9k",
    [
     "logical"
    ]
   ],
   "b": [
    "k9a",
    [
     "deism"
    ]
   ],
   "title": "Suffering rules out a good creator, yet a creator made this world",
   "why": "Voltaire’s Lisbon poem pressed exactly this on deists: if a good, powerful God set up the world, why set it up with earthquakes?",
   "ways": [
    "The creator isn’t all-good",
    "The creator isn’t all-powerful",
    "Rethink one answer"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k9k",
    [
     "noforce"
    ]
   ],
   "b": [
    "k9c",
    [
     "none"
    ]
   ],
   "title": "The problem has answers, yet none of them works",
   "why": "You said the problem of evil loses its force once you see the responses, and also that none of the responses answers it.",
   "ways": [
    "The problem is misconceived, not answered",
    "Another answer works",
    "Rethink one answer"
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "k9d",
    [
     "basic"
    ]
   ],
   "b": [
    "k9i",
    [
     "never"
    ]
   ],
   "title": "Belief in God needs no argument, yet belief needs evidence",
   "why": "A basic belief is held without argument. If evidence has to mean argument, that clashes with your rule that belief needs enough evidence.",
   "ways": [
    "Experience counts as evidence",
    "Some beliefs are exempt",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "Evidence must come as argument or other beliefs, not as experience itself."
  },
  {
   "tier": 2,
   "a": [
    "k9l",
    [
     "perceive"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "title": "Religious experiences are evidence, yet there is no God",
   "why": "If experiences of God are like perception, to be trusted unless there’s a reason not to, the many reports of them count toward God.",
   "ways": [
    "There are defeaters",
    "Evidence can be outweighed",
    "Rethink one answer"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k9g",
    [
     "design"
    ]
   ],
   "b": [
    "k9",
    [
     "no",
     "agnostic"
    ]
   ],
   "title": "Physics was designed, yet you don’t believe in God",
   "why": "A designer who set up the laws of physics sounds a lot like a creator God.",
   "ways": [
    "The designer needn’t be a god",
    "Design is likely but not God",
    "Rethink fine-tuning"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k9g",
    [
     "design"
    ]
   ],
   "b": [
    "k9h",
    [
     "none"
    ]
   ],
   "title": "A designer best explains physics, yet no argument for God has force",
   "why": "Saying design best explains fine-tuning is the core of the design argument, which you said has no real force.",
   "ways": [
    "A designer, but not God",
    "Best explanation, but still weak",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "The designer of physics would be God."
  },
  {
   "tier": 2,
   "a": [
    "k9e",
    [
     "bet"
    ]
   ],
   "b": [
    "k9j",
    [
     "allfalse"
    ]
   ],
   "title": "Bet on God, yet every religion is false",
   "why": "Pascal’s bet is on the God of a religion, with its promise of eternal life. If every religion’s claims about God are false, what are you betting on?",
   "ways": [
    "Bet on a God no religion has right",
    "Rethink the wager",
    "Rethink one answer"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k9j",
    [
     "exclusive",
     "inclusive"
    ]
   ],
   "b": [
    "k9",
    [
     "no",
     "agnostic"
    ]
   ],
   "title": "One religion is true, yet you don’t believe in God",
   "why": "Most religions that claim to be the one true path teach that God exists.",
   "ways": [
    "A non-theistic religion is the true one",
    "True in its teaching, not its gods",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "The religion you think is true teaches that God exists."
  },
  {
   "tier": 2,
   "a": [
    "k9j",
    [
     "suspend"
    ]
   ],
   "b": [
    "k9",
    [
     "yes",
     "no"
    ]
   ],
   "title": "No one should be confident, yet you take a side",
   "why": "You said sincere, well-informed disagreement means no one should be confident their view is right, and you also take a side on God. That only fits if you hold it without confidence.",
   "ways": [
    "Believing isn’t the same as confidence",
    "My evidence is better than theirs",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "Taking a side on God means being confident your answer is right."
  },
  {
   "tier": 2,
   "a": [
    "k9j",
    [
     "allfalse"
    ]
   ],
   "b": [
    "l5",
    [
     "resur",
     "rebirth",
     "soul"
    ]
   ],
   "title": "Every religion’s supernatural claims are false, yet you expect life after death",
   "why": "Life after death is one of the central supernatural claims religions make.",
   "ways": [
    "Survival could be natural",
    "Hope, not belief",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "Life after death of these kinds would be supernatural."
  },
  {
   "tier": 2,
   "a": [
    "k9a",
    [
     "deism"
    ]
   ],
   "b": [
    "k9d",
    [
     "reveal"
    ]
   ],
   "title": "God never steps in, yet God has revealed things",
   "why": "Deists hold that God doesn’t act in the world after creating it, which rules out revelation through prophets or scripture.",
   "ways": [
    "Revelation was built into nature or reason",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "Revelation through scripture or tradition requires God to act in the world after creation."
  },
  {
   "tier": 2,
   "a": [
    "k9a",
    [
     "pantheism"
    ]
   ],
   "b": [
    "k9c",
    [
     "freewill",
     "soulmaking",
     "skeptical",
     "redeem",
     "notmoral"
    ]
   ],
   "title": "Your God is nature, yet God has reasons for allowing suffering",
   "why": "A God who simply is nature doesn’t choose or plan, so it has no reasons for allowing anything. Spinoza said so himself.",
   "ways": [
    "It’s the best answer, but it fails",
    "Nature has a purpose after all",
    "Rethink one answer"
   ],
   "unless": [
    [
     "k9k",
     [
      "logical",
      "evidential",
      "limited"
     ]
    ]
   ],
   "type": "tension",
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "k9c",
    [
     "freewill"
    ]
   ],
   "b": [
    "m3",
    [
     "no"
    ]
   ],
   "title": "Evil is the price of free will, yet there’s no free will",
   "why": "The free will defense explains evil by our freedom. If there is no free will, it explains nothing.",
   "ways": [
    "It’s the best answer, but it fails",
    "Rethink free will"
   ],
   "unless": [
    [
     "k9k",
     [
      "logical",
      "evidential"
     ]
    ]
   ],
   "type": "conditional",
   "premise": "You think the free will defense actually works, not just that it is the best answer on offer."
  },
  {
   "tier": 2,
   "a": [
    "k9c",
    [
     "freewill"
    ]
   ],
   "b": [
    "m3",
    [
     "compat"
    ]
   ],
   "title": "Evil is the price of free will, and free will fits with determinism",
   "why": "Mackie’s point: if a free choice can be fully determined, God could have made people who always freely choose good.",
   "ways": [
    "Determined by God is different",
    "Free will needs open options after all",
    "Use another answer to evil"
   ],
   "challenge": true,
   "unless": [
    [
     "k9k",
     [
      "logical",
      "evidential"
     ]
    ]
   ],
   "type": "conditional",
   "premise": "If a free choice can be fully determined, God could have made people who always freely choose good."
  },
  {
   "tier": 2,
   "a": [
    "k9",
    [
     "agnostic"
    ]
   ],
   "b": [
    "e5b",
    [
     "theistic"
    ]
   ],
   "title": "You don’t lean on God, yet moral facts are grounded in God",
   "why": "If you’re confident moral facts exist and they need God, you have a reason to believe God exists.",
   "ways": [
    "Morality is less certain than it looks",
    "It’s a hypothesis, not a belief",
    "Moral facts have another ground"
   ],
   "type": "conditional",
   "premise": "You hold your view of moral facts with confidence, not as a guess."
  },
  {
   "tier": 2,
   "a": [
    "e4e",
    [
     "divine"
    ]
   ],
   "b": [
    "k9",
    [
     "agnostic"
    ]
   ],
   "title": "Right comes from God, yet you don’t lean toward God",
   "why": "You said duties come from God’s commands or the moral order God built into human nature. If you don’t lean toward God existing, you can’t lean toward your duties being real either.",
   "ways": [
    "Find another source for duties.",
    "Say your duties hold if God exists, and leave it open.",
    "Lean toward God, since you’re sure of your duties."
   ],
   "type": "conditional",
   "premise": "You are confident you have real duties."
  },
  {
   "tier": 2,
   "a": [
    "k9d",
    [
     "moral"
    ]
   ],
   "b": [
    "e5",
    [
     "no"
    ]
   ],
   "title": "Belief rests on morality, yet there are no moral facts",
   "why": "The moral argument starts from real right and wrong. You said moral claims don’t state objective facts.",
   "ways": [
    "Moral experience points to God anyway",
    "Constructed morality still needs a ground",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "The moral argument needs right and wrong to be objective facts."
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "k9",
    [
     "yes",
     "ultimate"
    ]
   ],
   "title": "Untestable differences aren’t real, yet God exists",
   "why": "If no observation could ever settle whether God exists, that is exactly the kind of difference you called unreal.",
   "ways": [
    "Say God’s existence is testable, for example after death.",
    "Say the rule “untestable means empty” can’t itself be tested.",
    "Say God-talk is about how to live."
   ],
   "type": "conditional",
   "premise": "God’s existence makes no testable difference."
  },
  {
   "tier": 2,
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "k9a",
    [
     "theism",
     "open"
    ]
   ],
   "title": "Your mind is just your brain, yet God is a mind with no brain",
   "why": "If a mind can exist with no body at all, as God’s does, it’s fair to ask why yours needs a brain. Christian materialists such as Peter van Inwagen accept both and say only human minds are material.",
   "ways": [
    "Say God is so different from creatures that the rule for our minds doesn’t apply.",
    "Say your mind is more than your brain.",
    "Choose a God who isn’t a mind, like nature itself."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l5",
    [
     "resur"
    ]
   ],
   "b": [
    "k9",
    [
     "no",
     "agnostic"
    ]
   ],
   "title": "Raised again, with no one to raise you",
   "why": "Resurrection at the end of time is usually God’s act. Without God, what would bring you back?",
   "ways": [
    "A natural process could do it",
    "Hope, not belief",
    "Rethink one answer"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l5",
    [
     "merge"
    ]
   ],
   "b": [
    "k9",
    [
     "no",
     "nomeaning"
    ]
   ],
   "title": "No God, yet you return to an ultimate reality",
   "why": "You expect to dissolve back into an ultimate reality, but you said there is no God. If that reality is just nature, there’s no conflict. If it is something sacred, “Not a god, but something ultimate” fits you better.",
   "ways": [
    "Say the whole is just nature, nothing sacred.",
    "Change your God answer to “something ultimate”.",
    "Say death is simply the end of you."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k9f",
    [
     "nirvana"
    ]
   ],
   "b": [
    "l5",
    [
     "soul"
    ]
   ],
   "title": "No lasting self, yet your soul lives on",
   "why": "Buddhism denies a lasting self, so there is no soul to survive death; rebirth is a continuing stream, not a soul.",
   "ways": [
    "Rebirth, not a surviving soul",
    "Something does continue",
    "Rethink one answer"
   ],
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "k9b",
    [
     "evidence"
    ]
   ],
   "b": [
    "k9k",
    [
     "noforce"
    ]
   ],
   "title": "Suffering is your reason for atheism, yet the answers to it work",
   "why": "You said pointless suffering counts against God, and also that the problem of evil loses its force once you see the responses.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "k9k",
    [
     "outweigh"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "title": "Reasons for God outweigh suffering, yet there is no God",
   "why": "You said other reasons count for God more than suffering counts against. That sounds like a case for God, not against.",
   "ways": [
    "Outweighs suffering, not everything else",
    "Hiddenness or another reason decides it",
    "Rethink one answer"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k9e",
    [
     "bet"
    ]
   ],
   "b": [
    "k9i",
    [
     "never"
    ]
   ],
   "title": "Bet on God, yet never believe without evidence",
   "why": "Pascal’s wager asks you to believe for the payoff when evidence can’t settle it. Your rule says that is never reasonable, unless a smart bet and a reasonable belief are different things.",
   "ways": [
    "Reject the premise: say the wager makes belief prudent, not reasonable in Clifford’s sense.",
    "The bet is to act as if, not to believe.",
    "Then seek evidence, as Pascal advised.",
    "Rethink one answer."
   ],
   "challenge": true,
   "type": "conditional",
   "premise": "There isn't enough evidence for God, and a smart bet counts as 'reasonable' in your evidentialist rule."
  },
  {
   "tier": 2,
   "a": [
    "k9m",
    [
     "balanced"
    ]
   ],
   "b": [
    "k9h",
    [
     "none"
    ]
   ],
   "title": "Good arguments on both sides, yet none for God has force",
   "why": "You said the arguments for and against God roughly cancel out, but also that no argument for God has any real force.",
   "ways": [
    "The case for God is cumulative, not one argument",
    "Experience, not argument, balances it",
    "Rethink one answer"
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "l1g",
    [
     "god"
    ]
   ],
   "b": [
    "k9",
    [
     "yes"
    ]
   ],
   "title": "Meaning would need God, God exists, yet life has no meaning",
   "why": "You said only God and an afterlife could give life a point, and that God exists. Unless there is no afterlife either, you have the ingredients you said meaning needs.",
   "ways": [
    "God exists but there is no life after death",
    "Life has meaning after all",
    "Even God couldn’t give life a point"
   ],
   "type": "conditional",
   "premise": "Together with God there is life after death, which you said would give life a point."
  },
  {
   "tier": 1,
   "a": [
    "k4b",
    [
     "pyrrho"
    ]
   ],
   "b": [
    "k1",
    [
     "true",
     "selective"
    ]
   ],
   "title": "You suspend all belief about the world, yet science is true",
   "why": "Saying our best theories are (even partly) true is a belief about the world, the very kind you said to suspend.",
   "type": "conditional",
   "premise": "Picking an answer here means you believe it about how things really are, not just that it is how things seem to you.",
   "ways": [
    "Reject the premise: read your science answer as how things seem to you, not how they really are.",
    "Suspend judgment about science too.",
    "Give up suspending judgment."
   ]
  },
  {
   "tier": 1,
   "a": [
    "k4a",
    [
     "ideal"
    ]
   ],
   "b": [
    "m1",
    [
     "yes"
    ]
   ],
   "title": "The world is made of experiences, yet the mind is just the brain",
   "why": "One answer says brains are made of experience; the other says experience is something brains do. Both can’t be the basic story.",
   "type": "conditional",
   "premise": "Physicalism says the physical is basic and not itself made of experience.",
   "ways": [
    "Reject the premise: treat the brain itself as a pattern of experience, so brain-talk sits on top of idealism (as phenomenalists did).",
    "Give up physicalism.",
    "Give up idealism."
   ]
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "no"
    ]
   ],
   "b": [
    "k1",
    [
     "true",
     "selective"
    ]
   ],
   "unless": [
    [
     "k4b",
     [
      "pyrrho"
     ]
    ]
   ],
   "title": "You can’t know you have hands, yet science is roughly true",
   "why": "Every scientific result rests on observation, and observation is exactly what the dream argument puts in doubt.",
   "ways": [
    "Science is reasonable belief, not knowledge",
    "Skepticism is a study-room game; science is real life",
    "Drop one of the two"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k11",
    [
     "track"
    ]
   ],
   "b": [
    "k4",
    [
     "no"
    ]
   ],
   "title": "Knowing means tracking the truth, yet you don’t know you have hands",
   "why": "On the tracking test you pass for “I have hands”: if you had none, you’d see that you didn’t. You fail only for “I’m not dreaming.” Nozick concluded you can know the first without knowing the second.",
   "ways": [
    "Knowing something needn’t mean knowing everything it implies",
    "Your senses may not track the truth at all",
    "Then you do know you have hands"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k2a",
    [
     "indisp"
    ]
   ],
   "b": [
    "k1",
    [
     "tools"
    ]
   ],
   "title": "Numbers exist because science needs them, yet science needn’t be true",
   "why": "The argument you gave says: believe in whatever our true theories need. If theories are only tools, it gives no reason to believe in numbers.",
   "ways": [
    "Say numbers are needed by any useful tool.",
    "Say we know numbers by seeing with the mind, or through logic.",
    "Say numbers don’t exist."
   ],
   "type": "conditional",
   "premise": "Indispensability gives reason to believe in numbers only if our theories are true."
  },
  {
   "tier": 2,
   "a": [
    "k2b",
    [
     "fiction"
    ]
   ],
   "b": [
    "k1",
    [
     "true"
    ]
   ],
   "title": "Numbers are fictions, yet science, full of numbers, is literally true",
   "why": "Physics says things like “the electron’s charge is 1.6 × 10⁻¹⁹ coulombs.” If there are no numbers, that sentence can’t be literally true as written.",
   "ways": [
    "Rewrite physics without numbers (Hartry Field tried).",
    "Say only the non-mathematical part is true.",
    "Say numbers are real after all."
   ],
   "challenge": true,
   "type": "conditional",
   "premise": "Science's sentences with numbers must be literally true, not just their non-mathematical content."
  },
  {
   "tier": 2,
   "a": [
    "k3",
    [
     "empiric"
    ]
   ],
   "b": [
    "k2a",
    [
     "intuition"
    ]
   ],
   "title": "All knowledge of the world is from experience, yet we see mathematical truths directly",
   "why": "Your empiricism covers every fact about the world. If mathematical truths count as such facts, seeing them by pure thought breaks your rule.",
   "ways": [
    "Numbers aren’t part of “the world”",
    "Intuition is a kind of experience",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "Mathematical truths are facts about the world."
  },
  {
   "tier": 2,
   "a": [
    "k7",
    [
     "yes",
     "spotlight"
    ]
   ],
   "b": [
    "m3",
    [
     "libert"
    ]
   ],
   "title": "Tomorrow is already real, yet nothing settles your choice in advance",
   "why": "If your future choice is already part of reality, it seems settled before you make it. Libertarians usually pair their view with an open future.",
   "ways": [
    "Say being real isn’t the same as being settled in advance.",
    "Say your free choice is part of what’s there.",
    "Say the future isn’t real yet."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k7",
    [
     "present",
     "growing",
     "spotlight"
    ]
   ],
   "b": [
    "k1",
    [
     "true",
     "selective"
    ]
   ],
   "title": "One true “now”, yet relativity is true",
   "why": "Relativity, one of the best-tested theories we have, says observers moving differently disagree about which distant events are happening “now”. Your view of time needs one true present for the whole universe.",
   "ways": [
    "Say physics describes measurements, not reality’s “now”.",
    "Say there is a true “now” that physics can’t detect.",
    "Say all times are equally real."
   ],
   "challenge": true,
   "type": "conditional",
   "premise": "Relativity’s denial of a universal ‘now’ is part of what science gets right about reality."
  },
  {
   "tier": 2,
   "a": [
    "k7",
    [
     "unreal"
    ]
   ],
   "b": [
    "k8",
    [
     "yes"
    ]
   ],
   "title": "Time is unreal, yet causes really make effects happen",
   "why": "Causes come before their effects. If nothing is really before anything, the “making happen” has no direction.",
   "ways": [
    "Causation can be timeless",
    "Time is real enough for causation",
    "Causation is unreal too"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "m3b",
    [
     "agent"
    ]
   ],
   "b": [
    "k8",
    [
     "no"
    ]
   ],
   "title": "You cause your choices as a whole person, yet there’s no real causal link",
   "why": "Agent causation needs a real power to make things happen. If causation is only patterns or dependence, there is nothing for an agent to exercise.",
   "ways": [
    "Reject the premise: say an agent causing a choice can be just a pattern, with no special power.",
    "Agents are the one exception.",
    "Switch to event-causal libertarianism.",
    "Accept real causal powers."
   ],
   "type": "conditional",
   "premise": "Agent causation needs a real power to make things happen, beyond regular patterns."
  },
  {
   "tier": 2,
   "a": [
    "k11",
    [
     "infall"
    ]
   ],
   "b": [
    "k4",
    [
     "yes"
    ]
   ],
   "title": "Knowing needs a guarantee, yet you know you have hands",
   "why": "Your reasons for thinking you have hands are experiences a vivid dream could copy. They make it very likely, not impossible, that you’re right.",
   "ways": [
    "Something guarantees it after all (Descartes appealed to God)",
    "Knowledge needs less than a guarantee",
    "Then you don’t know"
   ],
   "unless": [
    [
     "k4a",
     [
      "fallib",
      "proof",
      "ideal"
     ]
    ]
   ],
   "type": "conditional",
   "premise": "Your reasons for thinking you have hands could be had while dreaming."
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "k12",
    [
     "universal",
     "ordinary",
     "organic",
     "nihil",
     "monism"
    ]
   ],
   "title": "Untestable differences aren’t real, yet there’s a fact about when parts make a whole",
   "why": "A world where your nose and the Eiffel Tower make an object looks exactly like one where they don’t. Verificationism says that is no real difference.",
   "ways": [
    "Say the answer is a choice about words.",
    "Say the question can be settled some other way.",
    "Give up the idea that untestable differences aren’t real."
   ],
   "type": "conditional",
   "premise": "No test could ever tell which view of when parts make a whole is right."
  },
  {
   "tier": 2,
   "a": [
    "k12",
    [
     "nihil"
    ]
   ],
   "b": [
    "m2a",
    [
     "person"
    ]
   ],
   "title": "There are no chairs, yet you are this living body",
   "why": "If particles arranged chair-wise don’t make a chair, it’s hard to see why particles arranged person-wise make a body for you to be.",
   "ways": [
    "Say living things are the exception.",
    "Say you aren’t made of parts: you are a simple self.",
    "Say you are particles arranged person-wise, and that’s enough."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k1b",
    [
     "framework"
    ]
   ],
   "b": [
    "k13",
    [
     "corresp"
    ]
   ],
   "title": "No neutral way to judge frameworks, yet truth is matching the world",
   "why": "If truth is matching the world, one framework matches better than another whether or not anyone can tell. People who say each era sees through its own lens usually doubt that idea of matching.",
   "ways": [
    "Truth is matching, but we can never check it",
    "Truth is relative to a framework",
    "Rethink one answer"
   ],
   "challenge": true,
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k1",
    [
     "true"
    ]
   ],
   "b": [
    "k13",
    [
     "pragma"
    ]
   ],
   "title": "Science is true, in the sense of what holds up",
   "why": "Realists usually say theories match a world beyond anything we could test. If “true” means what would hold up under inquiry, that claim becomes much weaker. Hilary Putnam moved between these two views.",
   "ways": [
    "Pragmatist truth is all realism ever needed",
    "Truth is matching after all",
    "Then you are not a full realist"
   ],
   "retired": true
  },
  {
   "tier": 1,
   "a": [
    "k11",
    [
     "infall"
    ]
   ],
   "b": [
    "k4a",
    [
     "fallib"
    ]
   ],
   "title": "Knowing needs a guarantee, yet knowing doesn’t need proof",
   "why": "You said knowing needs reasons that make error impossible, and also that you know without being able to rule out error.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "k4b",
    [
     "pyrrho"
    ]
   ],
   "b": [
    "k2",
    [
     "yes"
    ]
   ],
   "title": "You suspend judgment, yet numbers really exist",
   "why": "Sextus Empiricus set the arguments about number against each other until neither side looked stronger. Saying numbers really exist takes a side.",
   "ways": [
    "Read your answer as how things appear to you.",
    "Suspend judgment on numbers too.",
    "Give up suspending judgment."
   ],
   "type": "conditional",
   "premise": "Picking an answer here means you believe it about how things really are, not just that it is how things seem to you."
  },
  {
   "tier": 2,
   "a": [
    "k4b",
    [
     "pyrrho"
    ]
   ],
   "b": [
    "k7",
    [
     "yes",
     "spotlight",
     "growing",
     "present",
     "unreal"
    ]
   ],
   "title": "You suspend judgment, yet you have a view on what time is",
   "why": "Sextus collected arguments that time can be neither divisible nor indivisible, nor limited nor unlimited, so that judgment about it would be suspended. Picking a view of time takes a side.",
   "ways": [
    "Read your answer as how things appear to you.",
    "Suspend judgment on time too.",
    "Give up suspending judgment."
   ],
   "type": "conditional",
   "premise": "Picking an answer here means you believe it about how things really are, not just that it is how things seem to you."
  },
  {
   "tier": 2,
   "a": [
    "k4b",
    [
     "pyrrho"
    ]
   ],
   "b": [
    "k12",
    [
     "universal",
     "ordinary",
     "organic",
     "nihil",
     "monism"
    ]
   ],
   "title": "You suspend judgment, yet you have a view on when parts make a whole",
   "why": "Sextus argued that a whole can be neither the same as its parts nor something separate from them. Saying when parts make a whole takes a side.",
   "ways": [
    "Read your answer as how things appear to you.",
    "Suspend judgment on wholes too.",
    "Give up suspending judgment."
   ],
   "type": "conditional",
   "premise": "Picking an answer here means you believe it about how things really are, not just that it is how things seem to you."
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "k13",
    [
     "corresp"
    ]
   ],
   "title": "Untestable differences aren’t real, yet truth is matching the world",
   "why": "Matching allows truths no test could ever check, such as whether you’re in a perfect dream. People who say untestable differences aren’t real usually deny that truth can outrun every test; A. J. Ayer said “true” adds nothing at all.",
   "ways": [
    "Say matching holds only for testable statements.",
    "Say “true” adds nothing.",
    "Give up the idea that untestable differences aren’t real."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k13",
    [
     "cohere"
    ]
   ],
   "b": [
    "k4",
    [
     "no"
    ]
   ],
   "title": "Truth is fitting together, yet you might be dreaming",
   "why": "A perfect dream hangs together completely. If coherence is truth, your dream beliefs would be true, and the skeptic’s worry needs a gap between fitting together and being true.",
   "ways": [
    "Only the one complete web counts, and a dream isn’t it",
    "Truth is matching after all",
    "Then you do know you have hands"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k1b",
    [
     "instrument"
    ]
   ],
   "b": [
    "k13",
    [
     "pragma"
    ]
   ],
   "title": "Theories are only tools, yet truth is what works",
   "why": "If “true” just means what works and keeps working, your best theories may count as true after all, which sits oddly with saying they describe nothing. Dewey held both and called his view instrumentalism.",
   "ways": [
    "Working for now isn’t holding up forever",
    "Truth is something more than working",
    "Then the theories are true after all"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e5a",
    [
     "relativism"
    ]
   ],
   "b": [
    "k13",
    [
     "corresp"
    ]
   ],
   "title": "Moral claims are true for some cultures and false for others, yet truth is matching the world",
   "why": "If the claim is about the act itself, one world can’t match it for one group and fail to match it for another.",
   "ways": [
    "The claim is really about a culture’s code, and that matches a fact",
    "Moral truth is a different kind: pluralism",
    "Rethink one answer"
   ],
   "type": "conditional",
   "premise": "A moral claim like this is about the act itself, not about a culture’s code."
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "yes"
    ]
   ],
   "b": [
    "k12",
    [
     "nihil",
     "organic"
    ]
   ],
   "unless": [
    [
     "k4a",
     [
      "common",
      "ideal"
     ]
    ]
   ],
   "title": "You know you have hands, yet strictly there are no hands",
   "why": "The classic objection, in the style of G. E. Moore: you are surer that you have hands than you could be of any argument that there are none. Organicists face it too: Peter van Inwagen argued that there are no hands, only you (a living whole) and your particles.",
   "ways": [
    "“I have hands” is loosely true: particles arranged hand-wise",
    "Some ordinary wholes, like hands, are real after all",
    "Then you don’t know you have hands"
   ],
   "type": "conditional",
   "premise": "“I have hands” must be strictly true, not loosely true of particles arranged hand-wise."
  },
  {
   "tier": 2,
   "a": [
    "k4a",
    [
     "common"
    ]
   ],
   "b": [
    "k12",
    [
     "nihil",
     "organic"
    ]
   ],
   "title": "Nothing could outweigh “I have hands,” yet strictly there are no hands",
   "why": "You said you are more sure you have hands than of any clever argument that you don’t. Yet you accepted an argument that, strictly, there are no hands, only particles arranged hand-wise.",
   "ways": [
    "Say “I have hands” is loosely true: particles arranged hand-wise.",
    "Say some ordinary wholes, like hands, are real after all.",
    "Say the argument against hands is weaker than you thought."
   ],
   "type": "conditional",
   "premise": "“I have hands” must be strictly true, not loosely true of particles arranged hand-wise."
  },
  {
   "tier": 2,
   "a": [
    "k12",
    [
     "verbal"
    ]
   ],
   "b": [
    "k2",
    [
     "yes"
    ]
   ],
   "title": "Questions about what exists are choices about words, yet numbers really exist outside space and time",
   "why": "Rudolf Carnap made exactly this point about numbers: once you adopt number talk, “there are numbers” is trivially true, and asking whether they “really” exist beyond that is empty.",
   "ways": [
    "Numbers exist inside the number framework, and that is all",
    "Some existence questions are real ones",
    "Drop Platonism"
   ],
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "k4b",
    [
     "pyrrho"
    ]
   ],
   "b": [
    "k8",
    [
     "yes",
     "no"
    ]
   ],
   "title": "You suspend judgment, yet you have a view on what causes are",
   "why": "Sextus argued at length that nothing can be shown to be a cause, and nothing can be shown not to be one. Answering this question takes a side.",
   "ways": [
    "Read your answer as how things appear to you.",
    "Suspend judgment on causes too.",
    "Give up suspending judgment."
   ],
   "type": "conditional",
   "premise": "Picking an answer here means you believe it about how things really are, not just that it is how things seem to you."
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "k3",
    [
     "rational"
    ]
   ],
   "title": "Untestable differences aren’t real, yet pure reasoning tells us facts about the world",
   "why": "Philosophers who held your view said that what you can know without looking is true by definition and says nothing about the world. A fact about the world found by reasoning alone is exactly what they denied.",
   "ways": [
    "Say the facts reason gives are only about meanings.",
    "Say some real claims can’t be tested by the senses.",
    "Give up the idea that untestable differences aren’t real."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "k8",
    [
     "yes"
    ]
   ],
   "title": "Untestable differences aren’t real, yet something real links cause and effect",
   "why": "A world with a real making-happen and a world where the same events simply follow one another would look exactly alike. That was Hume’s point, and later philosophers who held your view took it over.",
   "ways": [
    "Say we can feel the link when we push.",
    "Say causing is just the pattern.",
    "Give up the idea that untestable differences aren’t real."
   ],
   "type": "conditional",
   "premise": "A real link between cause and effect would make no testable difference."
  },
  {
   "tier": 2,
   "a": [
    "k13",
    [
     "pragma"
    ]
   ],
   "b": [
    "k4",
    [
     "no"
    ]
   ],
   "title": "Truth is what would hold up, yet you might be dreaming",
   "why": "A perfect dream would hold up under any amount of inquiry made from inside it. If that is what truth is, “I have hands” would be true even in the dream, and the skeptic’s worry has nothing left to say.",
   "ways": [
    "Inquiry could in principle reach outside the dream",
    "Truth is matching after all",
    "Then you do know you have hands"
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k4a",
    [
     "abduct"
    ]
   ],
   "b": [
    "k1b",
    [
     "empirical",
     "instrument"
    ]
   ],
   "title": "The best explanation earns belief, yet not for electrons",
   "why": "You believe in a real world because it best explains your experiences. Physicists believe in electrons because they best explain what they observe. Bas van Fraassen refuses the second for this reason: the best explanation, he says, needn’t be true.",
   "ways": [
    "Explaining all of experience is a different case",
    "Then believe in electrons too",
    "Find another answer to the dream worry"
   ],
   "type": "tension"
  },
  {
   "tier": 1,
   "a": [
    "k8a",
    [
     "god"
    ]
   ],
   "b": [
    "k9",
    [
     "no",
     "agnostic",
     "nomeaning",
     "ultimate"
    ]
   ],
   "title": "Only God makes things happen, yet you don’t believe in God",
   "why": "Occasionalism says every effect is God’s doing. That needs a God.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "k8a",
    [
     "god"
    ]
   ],
   "b": [
    "k9a",
    [
     "deism"
    ]
   ],
   "title": "Only God makes things happen, yet God never steps in",
   "why": "Occasionalism makes God the cause of every event, even fire burning cotton. A deist God set things running and stays out.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "s7",
    [
     "nofact"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "title": "Moral facts exist, yet there’s no fact about obeying",
   "why": "You said “torturing a child for fun is wrong” is an objective fact, then that this question has none. That fits only if moral facts run out on some questions.",
   "type": "conditional",
   "premise": "If some moral claims are objective facts, then this question has an objective answer too.",
   "ways": [
    "Say moral facts exist but run out on some questions, and this is one of them.",
    "Say there is a fact here after all.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "s8",
    [
     "nofact"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "title": "Moral facts exist, yet there’s no fact about justice",
   "why": "You said “torturing a child for fun is wrong” is an objective fact, then that whether a distribution is just has none. That fits only if moral facts run out on some questions.",
   "type": "conditional",
   "premise": "If some moral claims are objective facts, then this question has an objective answer too.",
   "ways": [
    "Say moral facts exist but run out on some questions, and this is one of them.",
    "Say there is a fact here after all.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "s5",
    [
     "nofact"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "title": "Moral facts exist, yet there’s no fact about paternalism",
   "why": "You said “torturing a child for fun is wrong” is an objective fact, then that this question has none. That fits only if moral facts run out on some questions.",
   "type": "conditional",
   "premise": "If some moral claims are objective facts, then this question has an objective answer too.",
   "ways": [
    "Say moral facts exist but run out on some questions, and this is one of them.",
    "Say there is a fact here after all.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "s1",
    [
     "nofact"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "title": "Moral facts exist, yet there’s no fact about punishment",
   "why": "You said “torturing a child for fun is wrong” is an objective fact, then that whether punishment is justified has none. That fits only if moral facts run out on some questions.",
   "type": "conditional",
   "premise": "If some moral claims are objective facts, then this question has an objective answer too.",
   "ways": [
    "Say moral facts exist but run out on some questions, and this is one of them.",
    "Say there is a fact here after all.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "s1",
    [
     "retrib",
     "mixed",
     "communic"
    ]
   ],
   "b": [
    "e4",
    [
     "nothing"
    ]
   ],
   "title": "Nothing is right or wrong, yet criminals deserve punishment",
   "why": "Deserving punishment is a moral idea. If nothing is right or wrong, no one deserves anything.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "s1",
    [
     "retrib",
     "mixed"
    ]
   ],
   "b": [
    "m3d",
    [
     "quarantine",
     "answer",
     "abolish"
    ]
   ],
   "title": "No one deserves blame, yet punishment is deserved",
   "why": "You said no one ever truly deserves blame, then justified punishment, or its limits, by what offenders deserve.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "s10",
    [
     "neg"
    ]
   ],
   "b": [
    "s10",
    [
     "means"
    ]
   ],
   "title": "The poor man is free, and also unfree",
   "why": "One answer says lacking money isn’t lacking freedom; the other says it is.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "s3",
    [
     "no"
    ]
   ],
   "b": [
    "s3",
    [
     "intrinsic",
     "protect",
     "epistemic"
    ]
   ],
   "title": "Democracy has no special claim, yet you gave it one",
   "why": "You picked a reason democracy is the right way to govern, and also said other systems can do as well.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "s13",
    [
     "neutral"
    ]
   ],
   "b": [
    "s13",
    [
     "perfect",
     "commun",
     "relig"
    ]
   ],
   "title": "The law should stay neutral, yet take sides",
   "why": "You said the law should leave the good life to each person, and also that it may favour one.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "s10",
    [
     "neg"
    ]
   ],
   "b": [
    "s10",
    [
     "nondom"
    ]
   ],
   "title": "The kind master’s slave is free, and also unfree",
   "why": "If freedom is only the absence of interference, the kind master’s slave is free; you also said he is unfree, because his master could interfere at will.",
   "ways": [
    "Say, as Quentin Skinner does, that both interference and the power to interfere take away freedom.",
    "Drop one answer."
   ],
   "type": "conditional",
   "premise": "Not being interfered with is all it takes to be free."
  },
  {
   "tier": 2,
   "a": [
    "s8a",
    [
     "enough"
    ]
   ],
   "b": [
    "s8a",
    [
     "diff",
     "luck"
    ]
   ],
   "title": "Enough matters most, yet only some gaps are fair",
   "why": "You said what matters most is that everyone has enough, and also that inequality is fair only under a condition. Together they say that condition governs the gaps above the line.",
   "ways": [
    "Say, as Paula Casal does, that “enough for all” comes first and a fairness rule governs gaps above the line.",
    "Say gaps above the line don’t matter at all, and drop the second answer.",
    "Drop the “enough for all” answer."
   ],
   "type": "tension",
   "retired": true
  },
  {
   "tier": 1,
   "a": [
    "s8a",
    [
     "welfare"
    ]
   ],
   "b": [
    "s8a",
    [
     "prior"
    ]
   ],
   "title": "Every gain weighs the same, yet gains to the worse-off weigh more",
   "why": "One answer gives a gain the same weight whoever gets it; the other gives extra weight to gains for those who are worse off.",
   "type": "contradiction"
  },
  {
   "tier": 1,
   "a": [
    "s4",
    [
     "harm"
    ]
   ],
   "b": [
    "s4",
    [
     "dignity",
     "order"
    ]
   ],
   "title": "Only direct harm, yet more than direct harm",
   "why": "You said the law may punish only speech that directly harms particular people, and also that it may punish more.",
   "retired": true
  },
  {
   "tier": 1,
   "a": [
    "s4",
    [
     "skeptic"
    ]
   ],
   "b": [
    "s4",
    [
     "harm",
     "dignity",
     "order"
    ]
   ],
   "title": "Free speech is just politics, yet you picked a principle",
   "why": "You said every society draws the line on speech for political reasons. If you hold your own line as a principle above politics, that is the kind of claim you doubted.",
   "type": "conditional",
   "premise": "If you hold your chosen line as a neutral principle of free speech, not as your own political choice of where to draw it.",
   "ways": [
    "Reject the premise: say your line is your own political choice of where to draw it, which is all a skeptic needs.",
    "Drop the skeptic answer.",
    "Drop the principle."
   ]
  },
  {
   "tier": 1,
   "a": [
    "s8",
    [
     "yes",
     "no",
     "rules"
    ]
   ],
   "b": [
    "e4",
    [
     "nothing"
    ]
   ],
   "title": "Nothing is right or wrong, yet a distribution can be fair or unfair",
   "why": "You said no action is really right or wrong. Calling a distribution, or a set of rules, fair or unfair looks like a moral claim of the same kind.",
   "type": "conditional",
   "premise": "If calling a distribution or a set of rules fair or unfair is a moral claim, which your skepticism about right and wrong also rules out.",
   "ways": [
    "Reject the premise: say “fair” here only means fair by a society’s own rules, not a moral fact.",
    "Read your answer as what you prefer, not a moral claim.",
    "Reconsider moral skepticism."
   ]
  },
  {
   "tier": 1,
   "a": [
    "s7",
    [
     "yes"
    ]
   ],
   "b": [
    "e4",
    [
     "nothing"
    ]
   ],
   "title": "Nothing is right or wrong, yet the law gives you a moral reason",
   "why": "A moral reason to obey is exactly what you said doesn’t exist: no action is really right or wrong.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "s1",
    [
     "retrib",
     "mixed",
     "communic"
    ]
   ],
   "b": [
    "m3",
    [
     "no"
    ]
   ],
   "unless": [
    [
     "m3d",
     [
      "quarantine",
      "answer",
      "abolish"
     ]
    ]
   ],
   "title": "No free will, but deserved punishment",
   "why": "If no one could have chosen otherwise, it’s hard to see how anyone could deserve to suffer for their choices.",
   "ways": [
    "Justify punishment by its effects only.",
    "Accept a kind of free will that can make people deserve things.",
    "Say belief in deserved punishment is false but worth keeping (Saul Smilansky’s view).",
    "Reject the premise: say public condemnation can call people to account without claiming they deserve to suffer."
   ],
   "type": "conditional",
   "premise": "Deserving punishment, or being fit for public condemnation, needs the kind of control you said no one has."
  },
  {
   "tier": 2,
   "a": [
    "s1",
    [
     "retrib"
    ]
   ],
   "b": [
    "e4",
    [
     "results"
    ]
   ],
   "title": "Only results make acts right, yet punishment is justified by desert",
   "why": "If an act is right only because of what happens as a result, punishing someone simply because they deserve it, whatever the effects, has no place.",
   "ways": [
    "Say a practice of deserved punishment has the best results in the long run.",
    "Admit that something besides results matters.",
    "Justify punishment by its effects instead."
   ],
   "type": "conditional",
   "premise": "Desert justifies punishment directly, not because honouring desert has good results."
  },
  {
   "tier": 2,
   "a": [
    "s3",
    [
     "intrinsic"
    ]
   ],
   "b": [
    "s7",
    [
     "no"
    ]
   ],
   "challenge": true,
   "title": "Everyone is owed an equal say, yet democratic laws don’t bind you",
   "why": "If an equal say is what respect requires, laws made that way seem to have a claim on you. Robert Paul Wolff argued the opposite: even a democracy asks you to give up your own judgment.",
   "ways": [
    "Say democracy is the fairest way to decide, but fairness creates no duty to obey.",
    "Say only unanimous decisions would bind you.",
    "Accept that democratically made laws do bind you."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s10",
    [
     "nondom"
    ]
   ],
   "b": [
    "s3",
    [
     "no"
    ]
   ],
   "title": "Freedom means no one ruling you at will, yet democracy has no special claim",
   "why": "If rulers you can’t remove or control may do as they like with you, you are dominated, which is what you said makes people unfree.",
   "ways": [
    "Say courts and laws can check rulers without elections.",
    "Accept that some democratic control is needed.",
    "Reconsider what freedom is."
   ],
   "unless": [
    [
     "s3b",
     [
      "heir"
     ]
    ]
   ],
   "type": "conditional",
   "premise": "Only democratic control can stop rulers from interfering with you at will."
  },
  {
   "tier": 2,
   "a": [
    "s8",
    [
     "no"
    ]
   ],
   "b": [
    "s10",
    [
     "means"
    ]
   ],
   "challenge": true,
   "title": "Freedom is having real options, yet honest poverty is no injustice",
   "why": "If lacking money makes someone unfree, a system that leaves people very poor leaves them unfree, however honestly it arose.",
   "ways": [
    "Say freedom matters, but justice is about rights, not options.",
    "Say helping the poor is charity, not justice.",
    "Reconsider one of the two answers."
   ],
   "type": "conditional",
   "premise": "A system that leaves people unfree is to that extent unjust."
  },
  {
   "tier": 2,
   "a": [
    "s8",
    [
     "no"
    ]
   ],
   "b": [
    "e4a",
    [
     "everyone",
     "prior"
    ]
   ],
   "title": "Everyone’s good counts equally, yet honest gains are always just",
   "why": "If only results for everyone matter, a distribution that leaves many in misery is worse than one that doesn’t, however it arose.",
   "ways": [
    "Say respecting honest holdings gives the best results in the long run.",
    "Admit that rights can outweigh results.",
    "Accept that some honest outcomes are unjust."
   ],
   "type": "conditional",
   "premise": "What makes a distribution just is how good its results are for everyone."
  },
  {
   "tier": 2,
   "a": [
    "s8a",
    [
     "luck"
    ]
   ],
   "b": [
    "m3",
    [
     "no"
    ]
   ],
   "challenge": true,
   "title": "Only choices can justify inequality, yet there’s no free will",
   "why": "If no one could have chosen otherwise, everything people have comes down to luck in the end, including their choices.",
   "ways": [
    "Accept strict equality: every difference is luck.",
    "Use a weaker idea of choice that doesn’t need free will.",
    "Choose another principle, such as the difference principle."
   ],
   "type": "conditional",
   "premise": "A choice can only be truly your own, rather than luck, if you had free will."
  },
  {
   "tier": 2,
   "a": [
    "s5",
    [
     "never"
    ]
   ],
   "b": [
    "s13",
    [
     "perfect",
     "relig"
    ]
   ],
   "title": "You’re in charge of your own life, yet the state should promote the good life",
   "why": "If the state may take sides about how to live, it is pushing people toward what it thinks is good for them.",
   "ways": [
    "Say encouraging isn’t forcing: the state can fund and teach without banning.",
    "Limit the state’s role to public things like schools and museums.",
    "Give up one: accept some paternalism, or accept neutrality."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s4",
    [
     "order"
    ]
   ],
   "b": [
    "s13",
    [
     "neutral"
    ]
   ],
   "title": "The state must stay neutral, yet may ban speech against shared values",
   "why": "If the shared values you’d protect are about how to live, banning speech against them is the kind of side-taking neutrality rules out.",
   "ways": [
    "Limit the ban to threats to public order, not to values.",
    "Accept that the state takes some sides.",
    "Narrow your speech answer to harm or dignity.",
    "Reject the premise: say the shared values you’d protect are neutral ones, like equal rights and fairness."
   ],
   "type": "conditional",
   "premise": "The shared values your ban protects include views about how to live, not just neutral ones like equal rights."
  },
  {
   "tier": 2,
   "a": [
    "s5",
    [
     "coerce"
    ]
   ],
   "b": [
    "s4",
    [
     "harm"
    ]
   ],
   "title": "Only harm to others limits speech, yet the law may force you for your own good",
   "why": "Mill’s harm principle, which you used for speech, was meant to rule out laws that protect people from themselves too.",
   "ways": [
    "Say speech is special and deserves more protection than other choices.",
    "Count harm to yourself as harm too.",
    "Bring the two into line."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s6",
    [
     "conserv"
    ]
   ],
   "b": [
    "s8a",
    [
     "common"
    ]
   ],
   "title": "Build carefully on what exists, yet a whole new economic order is needed",
   "why": "Common ownership of land and workplaces would be about as large a change as a society can make.",
   "ways": [
    "Say the change could come gradually over generations.",
    "Accept that justice here outweighs caution.",
    "Reconsider one of the two answers."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s13",
    [
     "relig"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "title": "Law should reflect God’s moral law, yet there’s no God",
   "why": "If there is no God, there is no moral law given by God for the law to reflect.",
   "ways": [
    "Say the same moral law can be known by reason alone, God or no God.",
    "Say religion is good for a society even if it isn’t true.",
    "Reconsider God."
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "s7a",
    [
     "mandate"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "title": "Authority comes from God or Heaven, yet there’s no God",
   "why": "If authority comes from a higher source, and there is no such source, authority has to come from somewhere else.",
   "ways": [
    "Read “Heaven” as the natural order or the people’s will, not a god (Mencius: “Heaven sees as my people see”).",
    "Reconsider God.",
    "Find another source for the duty to obey."
   ],
   "type": "conditional",
   "premise": "“Heaven” here means a god, not an impersonal natural or moral order."
  },
  {
   "tier": 2,
   "a": [
    "s12",
    [
     "nation",
     "state"
    ]
   ],
   "b": [
    "e6",
    [
     "strict"
    ]
   ],
   "title": "You must give to save distant strangers, yet governments owe more to their own",
   "why": "You said distance doesn’t change your own duty to save lives, yet your government may put its own citizens first.",
   "ways": [
    "Say individuals and governments have different jobs.",
    "Soften your duty to give.",
    "Accept that governments, too, owe much more to outsiders."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s12",
    [
     "cosmo"
    ]
   ],
   "b": [
    "e4w",
    [
     "little"
    ]
   ],
   "title": "Borders don’t change what we owe, yet distant strangers are owed little",
   "why": "You said borders don’t change what we owe, then that real care doesn’t reach strangers far away.",
   "ways": [
    "Say the duty to outsiders comes from justice, not care.",
    "Allow special duties to compatriots.",
    "Widen what care can reach."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s13",
    [
     "neutral"
    ]
   ],
   "b": [
    "s12",
    [
     "nation"
    ]
   ],
   "challenge": true,
   "title": "The state must stay neutral, yet a nation’s culture binds its members",
   "why": "If the state must not favour any way of life, it’s unclear how it can favour one national culture over others.",
   "ways": [
    "Say a national culture is a shared setting for choices, not a way of life.",
    "Accept that the state takes sides on culture.",
    "Drop the special role of the nation."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s1",
    [
     "forward"
    ]
   ],
   "b": [
    "e4r",
    [
     "constrained"
    ]
   ],
   "title": "Punishment is only for prevention, yet harming the innocent is off-limits",
   "why": "If preventing crime is the only aim, framing an innocent person to stop a deadly riot could be justified. You said some acts are ruled out whatever the gains.",
   "ways": [
    "Add desert as a limit: only the guilty may be punished (the mixed theory).",
    "Say framing the innocent never really prevents more harm in the long run.",
    "Give up the hard line."
   ],
   "unless": [
    [
     "e4b",
     [
      "rule",
      "twolevel"
     ]
    ]
   ],
   "type": "tension",
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "s7b",
    [
     "market",
     "coop",
     "indiv"
    ]
   ],
   "b": [
    "s8b",
    [
     "floor",
     "commons"
    ]
   ],
   "title": "No state at all, yet the state may tax to help the poor",
   "why": "You said states should be replaced, then gave the state a job: taxing people to help a poor child.",
   "ways": [
    "Say: as long as there is a state, this is what it may do.",
    "Say the help should come from voluntary associations instead.",
    "Accept that some state is justified."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s10",
    [
     "self"
    ]
   ],
   "b": [
    "s5",
    [
     "never"
    ]
   ],
   "title": "The smoker who can’t quit is unfree, yet the state may never help him",
   "why": "If being ruled by a craving makes you unfree, a law that helps you master it could make you freer, not less free.",
   "ways": [
    "Say self-mastery is something only you can achieve; the state can’t give it to you.",
    "Allow nudges or help you can opt out of.",
    "Reconsider what freedom is."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s7a",
    [
     "mandate"
    ]
   ],
   "b": [
    "s13",
    [
     "neutral"
    ]
   ],
   "title": "Authority comes from God or Heaven, yet the law must not take sides on religion",
   "why": "If rulers’ authority comes from God or Heaven, it seems odd for their laws to stay neutral about God.",
   "ways": [
    "Say God wants rulers who leave faith free, as many defenders of toleration argued.",
    "Read “Heaven” as the natural order or the people’s will, not a god.",
    "Find another source for the duty to obey."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s12",
    [
     "cosmo"
    ]
   ],
   "b": [
    "s7a",
    [
     "member"
    ]
   ],
   "title": "Borders don’t change what we owe, yet I owe my political community things I never chose",
   "why": "If belonging to a community creates duties you never chose, it can create special duties to fellow members too.",
   "ways": [
    "Say the duty to obey is special, but the duty to help is equal for all.",
    "Allow some special duties to compatriots.",
    "Find another source for the duty to obey."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s5",
    [
     "never",
     "nudge",
     "coerce"
    ]
   ],
   "b": [
    "e4",
    [
     "nothing"
    ]
   ],
   "title": "Nothing is right or wrong, yet the state may or may not push you",
   "why": "“May” and “may not” are moral permissions. If no action is really right or wrong, there is no fact about what the state may do.",
   "ways": [
    "Read your answer as a preference about the state, not a moral claim.",
    "Answer “No fact here”.",
    "Reconsider moral skepticism."
   ],
   "type": "conditional",
   "premise": "“May” here is a moral permission, not a statement of what you want the state to do."
  },
  {
   "tier": 2,
   "a": [
    "s10",
    [
     "neg"
    ]
   ],
   "b": [
    "s10",
    [
     "self"
    ]
   ],
   "title": "The smoker is free, and also unfree",
   "why": "If freedom is only the absence of interference, the smoker is free; you also said his craving makes him unfree.",
   "ways": [
    "Say, as Berlin did, that there are two real concepts of liberty.",
    "Treat inner freedom as a different good from political freedom.",
    "Drop one answer."
   ],
   "type": "conditional",
   "premise": "There is only one real kind of freedom, and it is the absence of interference."
  },
  {
   "tier": 2,
   "a": [
    "s8a",
    [
     "welfare"
    ]
   ],
   "b": [
    "s8a",
    [
     "diff"
    ]
   ],
   "title": "The best total, yet the worst-off first",
   "why": "An inequality can raise the total while leaving the worst-off worse off. Your first answer allows it; “gaps only if they help the worst-off” forbids it.",
   "ways": [
    "Say that in practice, helping the worst-off is usually what does the most good.",
    "Rank one principle above the other.",
    "Drop one answer."
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "e4a",
    [
     "prior"
    ]
   ],
   "b": [
    "s8a",
    [
     "welfare"
    ]
   ],
   "title": "The worse-off count for more in ethics, but not in justice",
   "why": "In ethics you gave extra weight to the worse-off; for justice you gave a gain the same weight whoever gets it.",
   "ways": [
    "Say justice for institutions differs from what individuals should aim at.",
    "Give the worse-off extra weight in justice too.",
    "Reconsider the ethics answer."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s13",
    [
     "commun"
    ]
   ],
   "b": [
    "s12",
    [
     "cosmo"
    ]
   ],
   "title": "The law may protect our shared way of life, yet borders don’t change what we owe",
   "why": "If a community’s way of life is part of who its people are, it seems to give them special ties to each other that outsiders lack.",
   "ways": [
    "Say protecting a culture is compatible with equal duties to outsiders.",
    "Allow special duties to compatriots.",
    "Reconsider one of the two answers."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "s8a",
    [
     "luck"
    ]
   ],
   "b": [
    "s8a",
    [
     "desert"
    ]
   ],
   "title": "Talent is luck, yet reward should follow contribution",
   "why": "How much you contribute depends heavily on talents and chances you never chose, which you said shouldn’t decide what you get.",
   "ways": [
    "Count only effort as desert, not contribution.",
    "Say desert matters, but only after a fair start.",
    "Drop one answer.",
    "Reject the premise: say contribution comes down mostly to choice and effort."
   ],
   "type": "conditional",
   "premise": "How much you contribute depends partly on talent and chances you never chose."
  },
  {
   "tier": 2,
   "a": [
    "s7a",
    [
     "consent"
    ]
   ],
   "b": [
    "s7a",
    [
     "member"
    ]
   ],
   "title": "I agreed to obey, yet I owe things I never chose",
   "why": "One answer grounds the duty in your agreement; the other says it binds you whether you agreed or not.",
   "ways": [
    "Say both are true: belonging binds you, and agreement adds to it.",
    "Pick the one that does the real work."
   ],
   "type": "tension",
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "s3b",
    [
     "heir"
    ]
   ],
   "b": [
    "s10",
    [
     "nondom"
    ]
   ],
   "title": "A hereditary ruler, yet freedom means no one ruling you at will",
   "why": "A ruler whose right comes from birth, and whom the people cannot remove, is exactly the kind of power you said makes people unfree.",
   "ways": [
    "Say a monarch bound by law and custom does not rule at will.",
    "Accept that some popular control is needed.",
    "Reconsider what freedom is."
   ],
   "type": "conditional",
   "premise": "A hereditary ruler can act at will, with no law, custom or institution able to check them."
  },
  {
   "tier": 2,
   "a": [
    "s8a",
    [
     "settled"
    ]
   ],
   "b": [
    "s6",
    [
     "radical"
    ]
   ],
   "title": "Justice is the settled rules, yet the system is unjust at its roots",
   "why": "If rules are just because they are the settled rules people live by, a system built on those rules can hardly be unjust at its roots.",
   "ways": [
    "Say the settled rules are just but the institutions around them are not.",
    "Say justice needs more than settled rules.",
    "Reconsider one answer."
   ],
   "type": "conditional",
   "premise": "Our present system’s rules are the long-settled ones, applied fairly to all."
  },
  {
   "tier": 2,
   "a": [
    "s8a",
    [
     "settled"
    ]
   ],
   "b": [
    "s8",
    [
     "yes"
    ]
   ],
   "title": "The outcome itself can be unjust, yet justice is the settled rules",
   "why": "If the settled rules only judge how people came to have things, an outcome reached honestly under them can’t be unjust in itself. You said it can.",
   "ways": [
    "Say the settled rules include rules about outcomes, such as a safety net.",
    "Answer “It depends on the rules” to the honest-fortunes question.",
    "Reconsider one answer."
   ],
   "type": "conditional",
   "premise": "The settled rules judge only how people came to have things, not who ends up with what."
  },
  {
   "tier": 1,
   "a": [
    "s7b",
    [
     "nofact"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "title": "Moral facts exist, yet none about whether states should exist",
   "why": "You said some moral claims state objective facts, then that whether states should exist has no true answer. That holds only if moral facts run out before this question.",
   "type": "conditional",
   "premise": "If moral facts exist, they settle big questions like whether states should exist.",
   "ways": [
    "Reject the premise: say moral facts exist but leave some questions, like this one, open.",
    "Say there is a fact about whether states should exist.",
    "Give up moral realism."
   ]
  },
  {
   "tier": 2,
   "a": [
    "s7b",
    [
     "keep",
     "coop",
     "indiv",
     "market"
    ]
   ],
   "b": [
    "e4",
    [
     "nothing"
    ]
   ],
   "title": "Nothing is right or wrong, yet states should or shouldn’t exist",
   "why": "Saying a state is justified, or should be replaced, is a moral claim. If no action is really right or wrong, there is no fact about it.",
   "ways": [
    "Read your answer as what you want, not a moral claim (as Stirner did).",
    "Answer “No fact here”.",
    "Reconsider moral skepticism."
   ],
   "type": "conditional",
   "premise": "Saying a state is justified or should be replaced is a moral claim, not a statement of what you want."
  },
  {
   "tier": 2,
   "a": [
    "e1",
    [
     "allow"
    ]
   ],
   "b": [
    "e2",
    [
     "req"
    ]
   ],
   "title": "The footbridge is more acceptable to you than the lever",
   "why": "Both choices save five by killing one, but pushing is the harder one to justify: you kill a man with your own hands and use his body to stop the train. Requiring the push while leaving the lever optional runs backwards. If anything is required, it should be the gentler lever.",
   "ways": [
    "Make pulling the lever required too.",
    "Make pushing only allowed, not required.",
    "Say what makes the lever optional but the push compulsory."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l3",
    [
     "same"
    ]
   ],
   "b": [
    "e4d",
    [
     "desire",
     "flourish"
    ]
   ],
   "title": "Your own good is more than feeling good, yet the deceived man lost nothing",
   "why": "You said your own good is getting what you actually want, or flourishing as a person. The deceived man wanted a faithful wife and real friends, and he had neither. By your own account of what is good for you, his life went worse, even though it felt the same.",
   "ways": [
    "Say his life went worse after all.",
    "Say what counts is only how things feel (hedonism).",
    "Explain why his case is different from your own."
   ],
   "type": "conditional",
   "premise": "What is good for you depends on how things really are, not just on how they feel to you."
  },
  {
   "tier": 1,
   "a": [
    "e4b",
    [
     "act"
    ]
   ],
   "b": [
    "e4r",
    [
     "constrained"
    ]
   ],
   "title": "Always aim at the best results, yet some acts are off-limits even when best",
   "why": "You said the right act is the one with the best results, worked out case by case. Then you said some acts stay wrong even when they would truly turn out better. Both can’t be the test of what makes an act right.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "e4b",
    [
     "twolevel"
    ]
   ],
   "b": [
    "e4r",
    [
     "constrained"
    ]
   ],
   "title": "The best result is what’s right, yet some acts are off-limits even when best",
   "why": "On your view, rules like “never kill patients” are tools for hitting the best result, not limits on it. If killing truly gave the best result, your own theory says it would be right, even if you’d never trust yourself to judge that in the moment.",
   "ways": [
    "Say you’d never do it, but admit it could be right in theory.",
    "Make the line a real limit, as rule-based or duty-based views do.",
    "Drop the hard line."
   ],
   "type": "conditional",
   "premise": "“Off-limits” means the act would be wrong, not just something you’d never let yourself do."
  },
  {
   "tier": 2,
   "a": [
    "e6",
    [
     "negative"
    ]
   ],
   "b": [
    "e1",
    [
     "req"
    ]
   ],
   "title": "You only owe others not to harm them, yet you must pull",
   "why": "Pulling harms the one on the side track in order to help five others. If your only duty is not to harm, pulling breaks that duty for the sake of something you said is never required: helping.",
   "ways": [
    "Say pulling is allowed but not required.",
    "Accept some duty to help people in danger.",
    "Explain why redirecting a threat isn’t harming.",
    "Reject the premise: say that standing at the lever and doing nothing counts as harming the five."
   ],
   "type": "conditional",
   "premise": "Letting the train hit the five is allowing harm, not doing it, so not pulling breaks no duty."
  },
  {
   "tier": 2,
   "a": [
    "e1",
    [
     "nofact"
    ]
   ],
   "b": [
    "e2",
    [
     "req"
    ]
   ],
   "title": "No fact about the lever, yet you must push",
   "why": "The push is the harder case: same numbers, but you kill a man with your own hands. If nothing makes pulling the lever right or wrong, it’s hard to see what makes pushing required.",
   "ways": [
    "Say there’s a fact about the lever too.",
    "Say there’s no fact about the push either.",
    "Explain what the push has that the lever lacks."
   ],
   "type": "conditional",
   "premise": "Your “no fact” answer about the lever comes from moral skepticism in general, not something special about that case."
  },
  {
   "tier": 2,
   "a": [
    "e4k",
    [
     "means",
     "intend"
    ]
   ],
   "b": [
    "e2",
    [
     "req",
     "allow"
    ]
   ],
   "title": "Using a person as a tool is the line, yet you may push",
   "why": "The footbridge man’s body is what stops the train: his being hit is the plan, not a side effect. That is the clearest case there is of using someone, and of intending harm.",
   "ways": [
    "Change your answer to “Don’t push”.",
    "Say the line can be crossed when enough lives are at stake.",
    "Explain why pushing doesn’t really use him."
   ],
   "type": "conditional",
   "premise": "The difference you named is an absolute line, not a weighty reason that enough lives could outweigh."
  },
  {
   "tier": 2,
   "a": [
    "e4",
    [
     "care"
    ]
   ],
   "b": [
    "e1a",
    [
     "yes"
    ]
   ],
   "title": "Ethics starts with the people you’re bound to, yet you’d sacrifice your own child",
   "why": "You said right action is doing right by the particular people in your life. Then you said five strangers outweigh your own child, “whoever the one is”. That is the impartial view your answer about care turned away from.",
   "ways": [
    "Say you may choose your child.",
    "Say care includes care for strangers in danger.",
    "Pick a theory that counts everyone equally."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e4a",
    [
     "everyone"
    ]
   ],
   "b": [
    "e3",
    [
     "less"
    ]
   ],
   "title": "Everyone counts equally, yet the pig’s equal pain matters less",
   "why": "You said a good result counts everyone equally, and the pig’s pain was set to be exactly as bad as the human’s. Peter Singer’s point: counting it for less just because it’s a pig’s is the same move as counting someone for less because of their race.",
   "ways": [
    "Count the pig’s pain equally.",
    "Limit “everyone” to people, and say what makes that line fair.",
    "Say something besides pain makes a human’s suffering worse, even at the same strength."
   ],
   "type": "conditional",
   "premise": "“Everyone” includes animals, not just people."
  },
  {
   "tier": 2,
   "a": [
    "e3",
    [
     "equal"
    ]
   ],
   "b": [
    "e4s",
    [
     "indirect"
    ]
   ],
   "title": "The pig’s pain matters as much as yours, yet animals are protected only indirectly",
   "why": "You said pain is pain, whoever feels it. Then you said the rules protect animals only because the people who make them care about animals. On that view, if no one cared, hurting a pig would be fine.",
   "ways": [
    "Say agreement covers only part of morality, and animals matter in the rest.",
    "Let someone speak for animals in the agreement.",
    "Say animals matter less after all."
   ],
   "type": "conditional",
   "premise": "The rules people would agree to are the whole of morality."
  },
  {
   "tier": 2,
   "a": [
    "e4g",
    [
     "mutual"
    ]
   ],
   "b": [
    "e4s",
    [
     "trustee"
    ]
   ],
   "title": "The rules are a deal for mutual benefit, yet they protect those who can’t deal",
   "why": "If people agree to rules because the rules benefit each of them, those who can offer nothing in return, like animals, gain nothing from the deal. Speaking on their behalf fits a fairness view better than a bargain.",
   "ways": [
    "Ground the rules in fairness instead.",
    "Say they’re protected only because the bargainers care about them.",
    "Say duties to them come from outside the deal."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e4h",
    [
     "right"
    ]
   ],
   "b": [
    "e4e",
    [
     "divine"
    ]
   ],
   "title": "Duties come from God, yet God commands them because they’re right",
   "why": "This is Plato’s puzzle. If God commands acts because they are already right, their rightness comes from somewhere else, and God passes it on rather than making it.",
   "ways": [
    "Say God tells us our duties but doesn’t make them right.",
    "Say God’s commands flow from God’s own good nature.",
    "Say duties come from morality itself, known by reason."
   ],
   "type": "tension",
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "e4q",
    [
     "authentic"
    ]
   ],
   "b": [
    "e4v",
    [
     "nofail"
    ]
   ],
   "title": "What matters is owning your choices, yet hiding from them is no failure",
   "why": "You said the only thing that makes a choice better is making it freely and owning it, without excuses. Then you said blaming your boss’s orders is no failure. By your own standard, that excuse is exactly the failure.",
   "ways": [
    "Call it a failure, by your own standard.",
    "Say real pressures can limit freedom.",
    "Say no choice is really better than another."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e4",
    [
     "exist"
    ]
   ],
   "b": [
    "m3",
    [
     "no"
    ]
   ],
   "title": "You’re responsible for what you stand for, yet no one has free will",
   "why": "You said right action is what you choose to stand for, and that you’re responsible for that choice. Then you said no one has the control that makes anyone responsible. Sartre’s ethics needs the very freedom you denied.",
   "ways": [
    "Say responsibility here only looks forward, not back.",
    "Accept free will.",
    "Pick a view of ethics that doesn’t rest on free choice."
   ],
   "type": "conditional",
   "premise": "Being responsible for what you stand for needs the kind of control that makes people deserve praise or blame."
  },
  {
   "tier": 2,
   "a": [
    "e5b",
    [
     "nonnatural"
    ]
   ],
   "b": [
    "k3",
    [
     "empiric"
    ]
   ],
   "title": "Moral facts can’t be measured, yet all facts come from experience",
   "why": "You said moral facts are like truths of logic: not physical, and nothing science could measure. You also said every fact about the world comes from seeing, hearing and measuring. Then how could anyone ever know a moral fact?",
   "ways": [
    "Say moral facts aren’t facts about “the world”.",
    "Say we come to see them through experience, like a trained eye.",
    "Say moral facts are natural facts science could study."
   ],
   "type": "conditional",
   "premise": "Moral facts are facts about the world that can’t be learned through experience."
  },
  {
   "tier": 2,
   "a": [
    "k4b",
    [
     "pyrrho"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "title": "You suspend judgment, yet moral facts are objective",
   "why": "Sextus Empiricus, the great ancient skeptic, set the arguments for and against objective good and bad against each other and suspended judgment. Saying moral truths hold whatever anyone thinks takes a side on how things really are.",
   "ways": [
    "Read your answer as how things seem to you.",
    "Suspend judgment on ethics too.",
    "Give up suspending judgment.",
    "Reject the premise: say your doubt is only about the senses and the outside world, not about ethics."
   ],
   "type": "conditional",
   "premise": "Your suspension of judgment covers moral questions, not just what your senses tell you."
  },
  {
   "tier": 2,
   "a": [
    "k4b",
    [
     "pyrrho"
    ]
   ],
   "b": [
    "k9",
    [
     "yes",
     "no"
    ]
   ],
   "title": "You suspend judgment, yet you take a side on God",
   "why": "Ancient skeptics suspended judgment on whether gods exist, setting the arguments on each side against each other. Saying yes or no takes a side.",
   "ways": [
    "Say it as part of ordinary life, without real belief, as Sextus did about the gods.",
    "Choose “I don’t lean either way”.",
    "Give up suspending judgment.",
    "Reject the premise: say your doubt is only about the senses and the outside world, not about God."
   ],
   "type": "conditional",
   "premise": "Your suspension of judgment covers questions about God, not just what your senses tell you."
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "e5",
    [
     "yes"
    ]
   ],
   "unless": [
    [
     "e5b",
     [
      "natural"
     ]
    ]
   ],
   "title": "Untestable differences aren’t real, yet moral facts are objective",
   "why": "No test could tell a world where torture is objectively wrong from a world where everyone merely hates it. A. J. Ayer drew the conclusion: moral claims state no facts, they only express feelings.",
   "ways": [
    "Say moral facts are natural facts science could test.",
    "Say some real differences can’t be tested.",
    "Say moral claims express feelings."
   ],
   "type": "conditional",
   "premise": "Your test for a real difference applies to every question, not just to dreams."
  },
  {
   "tier": 2,
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "m6",
    [
     "unknown"
    ]
   ],
   "title": "Untestable differences aren’t real, yet we could never tell if a machine feels",
   "why": "You said that if no test could ever tell two cases apart, there is no real difference between them. Then a machine that passes every test we could devise has a mind, and there’s nothing left that we “could never tell”.",
   "ways": [
    "Say we might one day find a test.",
    "Say some real differences can’t be tested.",
    "Say behaving like a mind is all there is to having one."
   ],
   "type": "conditional",
   "premise": "Your test for a real difference applies to minds as well as to dreams."
  },
  {
   "tier": 2,
   "a": [
    "m3",
    [
     "libert"
    ]
   ],
   "b": [
    "k9a",
    [
     "theism"
    ]
   ],
   "title": "Nothing settles your choice in advance, yet God already knows it",
   "why": "You believe in a God who knows what we will freely choose. If God knew yesterday that you’d pick tea, and God can’t be wrong, it seems your choice was settled before you made it, which your view of free will denies.",
   "ways": [
    "Say God is outside time and sees choices as they happen (Boethius).",
    "Say knowing a choice isn’t fixing it.",
    "Choose a God who doesn’t know free choices in advance."
   ],
   "type": "conditional",
   "premise": "If God knows your choice before you make it, it was settled before you made it."
  },
  {
   "tier": 2,
   "a": [
    "m4",
    [
     "someone"
    ]
   ],
   "b": [
    "l5",
    [
     "resur"
    ]
   ],
   "unless": [
    [
     "m4b",
     [
      "soul"
     ]
    ]
   ],
   "title": "A perfect copy isn’t you, yet you’ll be raised again",
   "why": "If a copy built from new matter on Mars is someone else, a body rebuilt at the end of time, long after yours has rotted away, looks like a copy too. Peter van Inwagen pressed this worry against his own Christian belief.",
   "ways": [
    "Say God keeps something of you in between, such as your soul.",
    "Say the raised body is truly yours, not a copy.",
    "Say the Mars copy is you after all."
   ],
   "type": "conditional",
   "premise": "A body rebuilt at the end of time, with nothing of you carried over, would be a copy, like the Mars twin."
  },
  {
   "tier": 2,
   "a": [
    "m4b",
    [
     "body",
     "brain"
    ]
   ],
   "b": [
    "l5",
    [
     "soul",
     "rebirth"
    ]
   ],
   "title": "You go where your body goes, yet you’ll survive its death",
   "why": "You said what keeps you the same person is your body (or your brain). A soul living on, or rebirth in a new body, leaves that body behind. On your view, whoever goes on wouldn’t be you.",
   "ways": [
    "Say what survives is part of you, but not you.",
    "Say a soul keeps you the same person.",
    "Say death is the end of you.",
    "Reject the premise: say your body or brain could somehow be carried on past death."
   ],
   "type": "conditional",
   "premise": "If you are your body or brain, you can’t go on once it has died and decayed."
  },
  {
   "tier": 2,
   "a": [
    "m2a",
    [
     "person"
    ]
   ],
   "b": [
    "l5",
    [
     "soul"
    ]
   ],
   "title": "You are a living human being, yet your soul lives on without your body",
   "why": "You said you are this person, body and brain together, with no extra thing hiding inside. Then nothing is left over to live on once the body dies.",
   "ways": [
    "Say the soul survives as part of you, not as you (Aquinas said “my soul is not I”).",
    "Say you are, or have, a soul after all.",
    "Say death is the end of you."
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "m2",
    [
     "no"
    ]
   ],
   "b": [
    "l5",
    [
     "soul"
    ]
   ],
   "unless": [
    [
     "l2b",
     [
      "noself"
     ]
    ]
   ],
   "title": "There’s no one thing that is you, yet your soul lives on",
   "why": "You said there is only a flow of thoughts and feelings, with no one extra thing that has them. A soul that survives death is exactly such a thing.",
   "ways": [
    "Say what continues is a stream, not a soul, as in Buddhist rebirth.",
    "Say there is a real self after all.",
    "Say nothing survives death."
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "l5",
    [
     "rebirth"
    ]
   ],
   "title": "Your mind is only your brain, yet you’ll be reborn",
   "why": "Your brain stops at death and isn’t carried into the next body. If your mind is just your brain at work, it’s unclear what could pass on to a new life.",
   "ways": [
    "Say a pattern, not a thing, carries on.",
    "Say the mind is more than the brain.",
    "Say death is the end of you."
   ],
   "type": "conditional",
   "premise": "Rebirth needs something of your mind to carry over to the new life."
  },
  {
   "tier": 2,
   "a": [
    "l2b",
    [
     "epicur"
    ]
   ],
   "b": [
    "l5",
    [
     "soul",
     "resur",
     "rebirth"
    ]
   ],
   "title": "No one is left to be harmed, yet you live on",
   "why": "Epicurus said death can’t harm you because once it comes, you’re gone. But you expect to live on. Then you aren’t gone, and his reason doesn’t apply to you.",
   "ways": [
    "Say death isn’t bad because you live on.",
    "Say death is the end of you.",
    "Say what lives on isn’t you in the sense that matters."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "l8",
    [
     "neutral"
    ]
   ],
   "b": [
    "l2c",
    [
     "bothbad"
    ]
   ],
   "title": "No one misses out before existing, yet you missed out on earlier years",
   "why": "About being born, you said that before someone exists there is no one to miss out. About the time before your birth, you said not being born earlier cost you good years. It’s hard to hold both.",
   "ways": [
    "Say the time before your birth wasn’t bad for you.",
    "Say being born can be good for someone.",
    "Explain why the two cases differ."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "e4m",
    [
     "stoic"
    ]
   ],
   "b": [
    "l3",
    [
     "worse"
    ]
   ],
   "title": "Nothing outside your character can harm you, yet the deceived man was harmed",
   "why": "You said virtue is all you need, and nothing outside your character can harm what truly matters. His wife’s and friends’ lies were outside his character, yet you said his life went worse.",
   "ways": [
    "Say he lost something, but nothing that truly matters.",
    "Say a good life needs more than virtue, as Aristotle did.",
    "Say his life went just as well."
   ],
   "type": "conditional",
   "premise": "If his life went worse for him, he lost something that truly matters."
  },
  {
   "tier": 2,
   "a": [
    "l1g",
    [
     "novalue"
    ]
   ],
   "b": [
    "l3a",
    [
     "objlist"
    ]
   ],
   "title": "Nothing is really valuable, yet some things are good for anyone",
   "why": "You said value is only projected onto the world, like faces in clouds. Then you said friendship and knowledge are good for the TV watcher whether he wants them or not. That is value that isn’t projected.",
   "ways": [
    "Say his life goes as well as he wants it to.",
    "Say some things really are valuable after all.",
    "Say “good for him” is a different kind of value."
   ],
   "type": "conditional",
   "premise": "“Good for him” is a real value of the kind you said is only projected."
  },
  {
   "tier": 2,
   "a": [
    "e4c",
    [
     "nonwel"
    ]
   ],
   "b": [
    "a1",
    [
     "us",
     "neither"
    ]
   ],
   "title": "Beauty is good in itself, yet beauty is only in us",
   "why": "You said some things, like beauty, are good even if no one is better off for them. But you also said calling something beautiful is about how people respond to it. Then a beautiful thing that no one ever sees has no beauty to be good.",
   "ways": [
    "Say what’s good in itself is knowledge, not beauty.",
    "Say beauty is in things after all.",
    "Say beauty’s goodness lies in how it moves people.",
    "Reject the premise: say a thing can be beautiful because of how people would respond to it, even if no one ever does."
   ],
   "type": "conditional",
   "premise": "Beauty depends on people actually responding to it, so something no one ever sees has none."
  },
  {
   "tier": 2,
   "a": [
    "e5a",
    [
     "error"
    ]
   ],
   "b": [
    "l1a",
    [
     "worth",
     "hybrid"
    ]
   ],
   "title": "Nothing is really right or wrong, yet some things are truly worthwhile",
   "why": "John Mackie’s argument against moral facts was an argument against all objective values: nothing out in the world tells us what matters. You accept that for right and wrong, but not for what makes a life worthwhile.",
   "ways": [
    "Explain why worth survives the argument when rightness doesn’t.",
    "Say meaning comes from what you care about.",
    "Accept some objective value, moral or not."
   ],
   "type": "conditional",
   "premise": "Mackie’s argument against moral facts works just as well against every kind of objective value."
  },
  {
   "tier": 2,
   "a": [
    "m5",
    [
     "noult",
     "nothing"
    ]
   ],
   "b": [
    "s1",
    [
     "retrib",
     "mixed"
    ]
   ],
   "title": "No one truly deserves blame, yet criminals deserve punishment",
   "why": "You said no one can truly deserve praise or blame for who they’ve become, or that blame is fair only for its effects. Punishing someone because they deserve it, or capping punishment at what they deserve, needs exactly the desert you denied.",
   "ways": [
    "Justify punishment by its effects only.",
    "Say people deserve blame for what they do, though not for who they are.",
    "Accept that people can deserve blame."
   ],
   "type": "conditional",
   "premise": "Deserving blame for what you did requires deserving blame for the self you acted from."
  },
  {
   "tier": 2,
   "a": [
    "m3",
    [
     "compat"
    ]
   ],
   "b": [
    "m5",
    [
     "noult"
    ]
   ],
   "title": "Your choices are free, yet no one deserves blame for who they are",
   "why": "You said a choice is free when it comes from your own reasons and values. If free will is what makes people deserve praise or blame, that clashes with your answer that no one can deserve credit or blame for a self they didn’t create, since every choice comes from that self.",
   "ways": [
    "Say you deserve blame for your choices, though not for your character.",
    "Say your values are yours now, however you got them.",
    "Say no one deserves blame after all.",
    "Reject the premise: say free choice is real but doesn’t by itself make anyone deserve blame."
   ],
   "type": "conditional",
   "premise": "Free will is the control that makes people deserve praise or blame."
  },
  {
   "tier": 2,
   "a": [
    "m3",
    [
     "unsure"
    ]
   ],
   "b": [
    "m3e",
    [
     "yes"
    ]
   ],
   "title": "Free will needs other possibilities, yet the device changes nothing",
   "why": "You said free will would need the replay to be able to come out differently. In the device case you could not have done otherwise, and you still said you’re just as responsible. So responsibility, at least, doesn’t need other possibilities.",
   "ways": [
    "Say responsibility needs less than free will does.",
    "Say you are less responsible with the device.",
    "Say free will doesn’t need other possibilities."
   ],
   "type": "conditional",
   "premise": "Moral responsibility needs the same free will you described."
  },
  {
   "tier": 2,
   "a": [
    "m3f",
    [
     "determ"
    ]
   ],
   "b": [
    "k8b",
    [
     "none"
    ]
   ],
   "title": "Everything is caused, yet there are no causes",
   "why": "You ruled out free will because every choice comes from a chain of earlier causes. You also said that, strictly, there are no causes, only equations. Then the chain you relied on isn’t there. (Bertrand Russell called “cause” a relic of a bygone age.)",
   "ways": [
    "Say what rules free will out is that the laws fix every choice, causes or not.",
    "Say causes are real after all.",
    "Pick another reason free will fails."
   ],
   "type": "conditional",
   "premise": "Determinism needs real causes, not just laws that fix each moment from the one before."
  },
  {
   "tier": 2,
   "a": [
    "k8a",
    [
     "god"
    ]
   ],
   "b": [
    "m1c",
    [
     "interact"
    ]
   ],
   "title": "Only God makes things happen, yet your feelings move your body",
   "why": "You said God is the only real cause. Then your pain can’t be what makes your hand pull away; God does it. Malebranche drew exactly that conclusion.",
   "ways": [
    "Say God acts through your feelings, so they count as causes too.",
    "Say God makes body and mind match, without one moving the other.",
    "Say things have real powers of their own."
   ],
   "type": "conditional",
   "premise": "Your feeling is part of why your hand moves only if it is a real cause, not just the occasion on which God acts."
  },
  {
   "tier": 1,
   "a": [
    "k9e",
    [
     "will"
    ]
   ],
   "b": [
    "k9i",
    [
     "never"
    ]
   ],
   "title": "Hope can decide when evidence can’t, yet never believe without enough evidence",
   "why": "On Pascal’s bet you said it’s reasonable to let your hopes decide when the evidence can’t settle a question. You also said believing anything important without enough evidence is never reasonable.",
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "k9k",
    [
     "evidential",
     "limited"
    ]
   ],
   "b": [
    "k9a",
    [
     "theism",
     "open"
    ]
   ],
   "title": "Suffering counts against God, yet you believe in a caring God",
   "why": "You said suffering makes God unlikely, or counts against an all-powerful, all-good God. Unless your God’s power is limited, or other reasons win out, that is the God you believe in.",
   "ways": [
    "Say other reasons outweigh it.",
    "Say God’s power or goodness is limited.",
    "Say suffering doesn’t count against God."
   ],
   "type": "conditional",
   "premise": "The God you believe in is all-powerful and all-good, and you have no stronger reasons that outweigh the suffering."
  },
  {
   "tier": 2,
   "a": [
    "k9c",
    [
     "none"
    ]
   ],
   "b": [
    "k9a",
    [
     "theism"
    ]
   ],
   "unless": [
    [
     "k9k",
     [
      "outweigh"
     ]
    ],
    [
     "k9c",
     [
      "trust",
      "skeptical"
     ]
    ]
   ],
   "title": "No explanation fits suffering with a good God, yet you believe in one",
   "why": "You said no explanation makes the world’s suffering fit with a good, all-powerful God. If that is the God you believe in, you believe without any account of why suffering is allowed.",
   "ways": [
    "Say you trust without knowing why, like Job.",
    "Say God’s reasons are beyond us.",
    "Say other reasons for God outweigh this."
   ],
   "type": "tension"
  },
  {
   "tier": 2,
   "a": [
    "k9c",
    [
     "karma",
     "redeem"
    ]
   ],
   "b": [
    "l5",
    [
     "end"
    ]
   ],
   "unless": [
    [
     "l5",
     [
      "soul",
      "resur",
      "rebirth",
      "merge"
     ]
    ]
   ],
   "title": "Suffering is set right beyond this life, yet death is the end",
   "why": "Your best explanation of suffering points to other lives: past lives that earned it, or a next life where it is healed. But you said death is simply the end of you.",
   "ways": [
    "Say it is set right within this life.",
    "Say something of you does go on.",
    "Pick a different explanation of suffering."
   ],
   "type": "conditional",
   "premise": "Some suffering, like a newborn’s or a death in agony, can’t be explained or healed within one life."
  },
  {
   "tier": 2,
   "a": [
    "e4k",
    [
     "means"
    ]
   ],
   "b": [
    "s1",
    [
     "forward"
    ]
   ],
   "title": "Never use a person as a tool, yet punish only to deter",
   "why": "Kant’s objection: punishing someone only to scare others off or protect the public uses him as a tool for other people’s good. You said using someone that way is what makes an act wrong.",
   "ways": [
    "Add that only the guilty may be punished, and no more than they deserve.",
    "Say punishment can respect offenders by aiming at their reform.",
    "Justify punishment by desert.",
    "Reject the premise: say a guilty person punished under rules he could accept is not used merely as a tool."
   ],
   "type": "conditional",
   "premise": "Punishing a guilty person to deter others treats them merely as a tool."
  },
  {
   "tier": 2,
   "a": [
    "e4a",
    [
     "everyone",
     "prior"
    ]
   ],
   "b": [
    "e6",
    [
     "imperfect"
    ]
   ],
   "unless": [
    [
     "e4b",
     [
      "rule"
     ]
    ]
   ],
   "title": "Everyone counts equally, yet how much you give is up to you",
   "why": "If a stranger’s life counts as much as anyone’s, keeping your holiday money and saving a life aren’t close. Peter Singer’s point is that on this view you must keep giving.",
   "ways": [
    "Say the right act only has to be good enough, not the best.",
    "Say rules that everyone could follow would ask only a fair share of each person.",
    "Say you must keep giving."
   ],
   "type": "conditional",
   "premise": "The right act is the one with the best results, not just one with good enough results."
  },
  {
   "tier": 2,
   "a": [
    "s1",
    [
     "communic"
    ]
   ],
   "b": [
    "m3d",
    [
     "quarantine",
     "abolish"
    ]
   ],
   "title": "Punishment publicly condemns, yet no one deserves blame",
   "why": "Condemning someone for a crime is blaming them, out loud. You said no one truly deserves blame, and that we should protect people, or fix problems, without holding faults against anyone.",
   "ways": [
    "Say the condemnation looks ahead: it asks the offender to do better.",
    "Justify punishment by prevention only.",
    "Accept that people can deserve blame."
   ],
   "type": "conditional",
   "premise": "Publicly condemning a wrong and calling the offender to account is a way of blaming them."
  },
  {
   "tier": 2,
   "a": [
    "l1a",
    [
     "subjective"
    ]
   ],
   "b": [
    "l1b",
    [
     "no"
    ]
   ],
   "title": "Meaning is what you care about, yet the grass-counter’s life lacks it",
   "why": "You said whatever you care about or commit yourself to gives your life its meaning. The grass-counter cares deeply about counting grass, yet you said his life lacks meaning. That suggests meaning also needs something worth doing, as Susan Wolf argued with cases like John Rawls’s grass-counter.",
   "ways": [
    "Accept that his life is meaningful: fulfilment is enough",
    "Add a condition: fulfilment in something worthwhile (Wolf’s view)",
    "Say his life is happy, but happiness isn’t meaning"
   ],
   "type": "contradiction"
  },
  {
   "tier": 2,
   "a": [
    "l1a",
    [
     "worth"
    ]
   ],
   "b": [
    "l1b",
    [
     "yes"
    ]
   ],
   "title": "Meaning needs real worth, yet counting grass is meaningful",
   "why": "You said meaning comes from things that are truly worthwhile, but counting blades of grass is about as pointless as an activity can be. If his life is meaningful, his fulfilment seems to be doing the work, not the worth of what he does.",
   "ways": [
    "Say his fulfilment is what makes it meaningful after all",
    "Say his life is happy but not meaningful",
    "Find real worth in it: patience, attention, wonder"
   ],
   "type": "conditional",
   "premise": "Counting blades of grass has no real worth."
  },
  {
   "tier": 2,
   "a": [
    "k9c",
    [
     "karma"
    ]
   ],
   "b": [
    "l5",
    [
     "end"
    ]
   ],
   "title": "Suffering comes from past actions, yet death is the end",
   "why": "Karma explains why a newborn suffers by pointing to deeds in earlier lives. If death is simply the end, there were no earlier lives for that suffering to come from.",
   "ways": [
    "Say karma works only within one life (then it can’t explain a baby’s suffering)",
    "Accept some form of rebirth",
    "Drop karma as the explanation"
   ],
   "type": "conditional",
   "premise": "Some suffering, like a newborn’s, can’t come from deeds done earlier in the same life.",
   "retired": true
  },
  {
   "tier": 2,
   "a": [
    "k9c",
    [
     "karma"
    ]
   ],
   "b": [
    "m1",
    [
     "yes"
    ]
   ],
   "unless": [
    [
     "l5",
     [
      "end"
     ]
    ]
   ],
   "title": "Suffering comes from past lives, yet your mind is just your brain",
   "why": "Karma needs something that carries your deeds from one life to the next. If your mind is simply your brain at work, it stops when the brain stops, and nothing is left to be reborn.",
   "ways": [
    "Say something other than the mind carries karma over",
    "Say karma works within one life only",
    "Drop one of the two answers"
   ],
   "type": "conditional",
   "premise": "Karma needs something of you to carry your deeds into a new life, and a mind that is only brain activity can’t be carried."
  }
 ],
 "patterns": {
  "ethics": [
   {
    "when": {
     "e4a": [
      "everyone",
      "prior"
     ],
     "e5b": "theistic"
    },
    "name": "Theistic utilitarian",
    "who": [
     "berkeley"
    ]
   },
   {
    "when": {
     "e4a": "prior"
    },
    "name": "Prioritarian",
    "who": [
     "parfit"
    ],
    "subtitle": "Results matter, and help for the worse off counts extra"
   },
   {
    "when": {
     "e4a": "both"
    },
    "name": "Sidgwickian dualist",
    "who": [
     "sidgwick"
    ],
    "subtitle": "Torn between everyone’s good and your own"
   },
   {
    "when": {
     "e4r": "prereq"
    },
    "name": "Consequentialist with a personal prerogative",
    "who": [
     "scheffler"
    ],
    "subtitle": "Do the most good, but you may sometimes put your own life first"
   },
   {
    "when": {
     "e4a": "everyone",
     "e4c": "nonwel"
    },
    "name": "Ideal utilitarian",
    "who": [
     "moore"
    ],
    "subtitle": "Make the world best, counting beauty and knowledge, not only happiness"
   },
   {
    "when": {
     "e4a": "everyone",
     "e4b": "rule"
    },
    "name": "Rule utilitarian",
    "who": [
     "hooker"
    ]
   },
   {
    "when": {
     "e4r": "constrained"
    },
    "name": "Constrained consequentialist",
    "who": [],
    "subtitle": "Results matter most, but some lines are never crossed"
   },
   {
    "when": {
     "e4a": "everyone",
     "e4b": "act",
     "e4c": "hedon"
    },
    "name": "Classical utilitarian",
    "who": [
     "bentham",
     "mill"
    ]
   },
   {
    "when": {
     "e4a": "everyone",
     "e4b": "twolevel"
    },
    "name": "Two-level utilitarian",
    "who": [
     "hare",
     "singer"
    ],
    "subtitle": "Aim at the best results, but live by trusted rules"
   },
   {
    "when": {
     "e4a": "everyone",
     "e4b": "act"
    },
    "name": "Act utilitarian",
    "who": [
     "smart",
     "godwin"
    ]
   },
   {
    "when": {
     "e4a": "everyone"
    },
    "name": "Utilitarian",
    "who": [
     "mill",
     "singer"
    ]
   },
   {
    "when": {
     "e4a": "close"
    },
    "name": "Self-referential altruist",
    "who": [],
    "subtitle": "Everyone counts, but family and friends count extra"
   },
   {
    "when": {
     "e4a": "me",
     "e4d": "flourish"
    },
    "name": "Objectivist",
    "who": [
     "rand"
    ],
    "subtitle": "Ayn Rand’s ethics: your own flourishing as a rational, independent person"
   },
   {
    "when": {
     "e4a": "me",
     "e4d": "pleasure"
    },
    "name": "Epicurean egoist",
    "who": [
     "epicurus"
    ]
   },
   {
    "when": {
     "e4a": "me"
    },
    "name": "Ethical egoist",
    "who": [
     "hobbes",
     "rand"
    ]
   },
   {
    "when": {
     "e4e": "deont",
     "e4f": "absolute",
     "e4k": "means"
    },
    "name": "Kantian absolutist",
    "who": [
     "kant"
    ]
   },
   {
    "name": "Moral absolutist",
    "who": [
     "anscombe",
     "finnis"
    ],
    "when": {
     "e4e": "deont",
     "e4f": "absolute"
    }
   },
   {
    "name": "Threshold deontologist",
    "who": [],
    "when": {
     "e4e": "deont",
     "e4f": "threshold"
    }
   },
   {
    "when": {
     "e4e": "deont"
    },
    "name": "Deontologist",
    "who": [
     "kant",
     "ross"
    ]
   },
   {
    "when": {
     "e4e": "contract",
     "e4g": "mutual"
    },
    "name": "Contractarian",
    "who": [
     "hobbes"
    ],
    "subtitle": "Morality as a deal that benefits everyone who signs up"
   },
   {
    "when": {
     "e4e": "contract"
    },
    "name": "Contractualist",
    "who": [
     "scanlon",
     "rawls"
    ],
    "subtitle": "Right means justifiable to everyone affected"
   },
   {
    "when": {
     "e4e": "divine",
     "e4h": "right"
    },
    "name": "Natural law theorist",
    "who": [
     "aquinas"
    ],
    "subtitle": "Morality is built into human nature, and reason can read it"
   },
   {
    "when": {
     "e4e": "divine",
     "e4h": "nature"
    },
    "name": "Modified divine command theorist",
    "who": [
     "adams_rm"
    ],
    "subtitle": "Duties come from God’s commands, which flow from God’s goodness"
   },
   {
    "when": {
     "e4e": "divine"
    },
    "name": "Divine command theorist",
    "who": [
     "ockham",
     "alghazali"
    ]
   },
   {
    "when": {
     "e4": "care",
     "e4i": "care"
    },
    "name": "Care ethicist",
    "who": [
     "noddings",
     "held",
     "slote"
    ]
   },
   {
    "when": {
     "e4": "care",
     "e4i": "graded"
    },
    "name": "Graded-care ethicist",
    "who": [
     "mencius",
     "confucius"
    ],
    "subtitle": "Care for everyone, but most for those closest, as Confucius taught"
   },
   {
    "when": {
     "e4": "care",
     "e4i": "special"
    },
    "name": "Partialist",
    "who": [
     "williams"
    ],
    "subtitle": "Your own people come first, and that is not a moral failing"
   },
   {
    "when": {
     "e4": "care"
    },
    "name": "Ethicist of relationships and care",
    "who": [
     "noddings",
     "held"
    ]
   },
   {
    "when": {
     "e4": "virtue",
     "e4j": "eudaim",
     "e4m": "stoic"
    },
    "name": "Stoic",
    "who": [
     "epictetus",
     "seneca",
     "marcus_aurelius",
     "zeno_citium"
    ]
   },
   {
    "when": {
     "e4": "virtue",
     "e4j": "conseq"
    },
    "name": "Virtue consequentialist",
    "who": [
     "driver"
    ],
    "subtitle": "Virtues are traits that reliably do good"
   },
   {
    "when": {
     "e4": "virtue",
     "e4j": "eudaim"
    },
    "name": "Neo-Aristotelian",
    "who": [
     "aristotle",
     "foot",
     "hursthouse"
    ],
    "subtitle": "Virtues are the traits that let a human life go well"
   },
   {
    "when": {
     "e4": "virtue",
     "e4j": "sentiment"
    },
    "name": "Humean sentimentalist",
    "who": [
     "hume"
    ],
    "subtitle": "Virtues are the traits we naturally admire"
   },
   {
    "when": {
     "e4": "virtue",
     "e4j": "role"
    },
    "name": "Confucian virtue ethicist",
    "who": [
     "confucius",
     "mencius"
    ]
   },
   {
    "when": {
     "e4": "virtue"
    },
    "name": "Virtue ethicist",
    "who": [
     "aristotle",
     "foot"
    ]
   },
   {
    "when": {
     "e4": "plural",
     "e4p": "particular"
    },
    "name": "Moral particularist",
    "who": [
     "dancy"
    ],
    "subtitle": "No moral rules, only cases"
   },
   {
    "when": {
     "e4": "plural",
     "e4p": "ranked"
    },
    "name": "Ranked pluralist",
    "who": [],
    "subtitle": "Several duties, in a fixed order of priority"
   },
   {
    "when": {
     "e4": "plural"
    },
    "name": "Rossian pluralist",
    "who": [
     "ross"
    ],
    "subtitle": "Several basic duties, weighed case by case"
   },
   {
    "when": {
     "e4": "exist",
     "e4q": "beauvoir"
    },
    "name": "Beauvoirian existentialist",
    "who": [
     "beauvoir"
    ]
   },
   {
    "when": {
     "e4": "exist",
     "e4q": "nietzsche"
    },
    "name": "Nietzschean",
    "who": [
     "nietzsche"
    ]
   },
   {
    "when": {
     "e4": "exist"
    },
    "name": "Existentialist",
    "who": [
     "sartre",
     "beauvoir"
    ]
   },
   {
    "when": {
     "e5d": "fiction"
    },
    "name": "Moral fictionalist",
    "who": [
     "joyce"
    ],
    "subtitle": "Morality is a useful story we should keep telling"
   },
   {
    "when": {
     "e4": "nothing"
    },
    "name": "Moral skeptic",
    "who": [
     "mackie"
    ]
   }
  ],
  "meta": [
   {
    "when": {
     "e5b": "theistic"
    },
    "name": "theistic moral realist"
   },
   {
    "when": {
     "e5b": "natural"
    },
    "name": "naturalist moral realist"
   },
   {
    "when": {
     "e5b": "nonnatural"
    },
    "name": "non-naturalist moral realist",
    "who": [
     "moore",
     "ross",
     "parfit"
    ]
   },
   {
    "when": {
     "e5": "yes"
    },
    "name": "moral realist"
   },
   {
    "when": {
     "e5f": "kantian"
    },
    "name": "Kantian constructivist",
    "who": [
     "korsgaard",
     "rawls"
    ]
   },
   {
    "when": {
     "e5f": "humean"
    },
    "name": "Humean constructivist",
    "who": [
     "street"
    ]
   },
   {
    "when": {
     "e5": "construct"
    },
    "name": "constructivist"
   },
   {
    "when": {
     "e5a": "relativism"
    },
    "name": "relativist"
   },
   {
    "when": {
     "e5d": "abolish"
    },
    "name": "moral abolitionist",
    "who": [
     "garner"
    ]
   },
   {
    "name": "moral fictionalist",
    "who": [
     "joyce"
    ],
    "when": {
     "e5d": "fiction"
    }
   },
   {
    "when": {
     "e5a": "error",
     "e4": [
      "results",
      "duties",
      "virtue",
      "plural"
     ]
    },
    "name": "Mackie-style moral inventor",
    "subtitle": "No moral facts, so we should invent good rules to live by"
   },
   {
    "when": {
     "e5a": "error"
    },
    "name": "error theorist",
    "who": [
     "mackie",
     "joyce"
    ],
    "subtitle": "Moral claims try to state facts, and all of them fail"
   },
   {
    "when": {
     "e5e": "quasi"
    },
    "name": "quasi-realist",
    "who": [
     "blackburn",
     "gibbard"
    ],
    "subtitle": "Morals express attitudes, yet some attitudes are better than others"
   },
   {
    "when": {
     "e5a": "noncog"
    },
    "name": "expressivist",
    "subtitle": "Moral claims express feelings, not facts"
   }
  ],
  "aesthetics": [
   {
    "when": {
     "a1a": "kant",
     "a2": "exper"
    },
    "name": "Kantian about taste and art",
    "who": [
     "kant"
    ]
   },
   {
    "when": {
     "a2": "moral",
     "a3": "moralism"
    },
    "name": "Moralist about art",
    "who": [
     "plato",
     "xunzi",
     "confucius"
    ]
   },
   {
    "when": {
     "a2": "feeling",
     "a3": "moralism"
    },
    "name": "Tolstoyan",
    "who": [
     "tolstoy"
    ]
   },
   {
    "when": {
     "a4": "express",
     "a2": "feeling"
    },
    "name": "Expression theorist",
    "who": [
     "collingwood",
     "tolstoy"
    ]
   },
   {
    "when": {
     "a2": "onlyform",
     "a3": "autonomy"
    },
    "name": "Aesthete",
    "who": [
     "bell",
     "wilde"
    ]
   },
   {
    "when": {
     "a3": "immoral2",
     "a2": [
      "insight",
      "plural"
     ]
    },
    "name": "Immoralist about art",
    "who": [
     "kieran",
     "eaton"
    ]
   },
   {
    "when": {
     "a2": "insight",
     "a3": [
      "moderate",
      "ethicism"
     ]
    },
    "name": "Moral critic",
    "who": [
     "murdoch"
    ]
   },
   {
    "when": {
     "a2": "moral",
     "a3": [
      "moderate",
      "ethicism"
     ]
    },
    "name": "Art for life’s sake",
    "who": []
   },
   {
    "when": {
     "a4a": "meaning",
     "a7": "context"
    },
    "name": "Artworld contextualist",
    "who": [
     "danto"
    ],
    "subtitle": "Art is made art by its meaning within art history"
   },
   {
    "when": {
     "a6": "unique",
     "a2": "exper"
    },
    "name": "Contemplative aesthete",
    "who": [
     "schopenhauer"
    ]
   },
   {
    "when": {
     "a7": "learn",
     "a2": [
      "insight",
      "onlyform"
     ]
    },
    "name": "Goodmanian about forgery",
    "who": [],
    "subtitle": "Knowing it’s a fake changes how you should look"
   },
   {
    "when": {
     "a5": "text",
     "a2": [
      "onlyform",
      "insight"
     ]
    },
    "name": "New Critic",
    "who": [],
    "subtitle": "Meaning lies in the words, not the author’s intent"
   },
   {
    "when": {
     "a5": "reader",
     "a4": "open"
    },
    "name": "Postmodern reader",
    "who": []
   },
   {
    "when": {
     "a9": "ai",
     "a4": [
      "aesthetic",
      "cluster"
     ]
    },
    "name": "Defender of machine creativity",
    "who": []
   },
   {
    "when": {
     "a8": "industry",
     "a2": [
      "insight",
      "onlyform"
     ]
    },
    "name": "Critic of the culture industry",
    "who": []
   },
   {
    "when": {
     "a8": "social",
     "a1a": [
      "relative",
      "none"
     ]
    },
    "name": "Sociologist of taste",
    "who": []
   },
   {
    "when": {
     "a4": "open"
    },
    "name": "Anti-essentialist about art",
    "who": [
     "weitz",
     "wittgenstein"
    ]
   },
   {
    "when": {
     "a1a": "better",
     "a3": "moderate"
    },
    "name": "Humean critic",
    "who": [
     "hume"
    ]
   },
   {
    "when": {
     "a1b": "higher"
    },
    "name": "Platonist about beauty",
    "who": [
     "plato",
     "plotinus"
    ]
   },
   {
    "when": {
     "a1b": "harmony"
    },
    "name": "Classical theorist of beauty",
    "who": [
     "pythagoras",
     "aristotle",
     "aquinas"
    ]
   },
   {
    "when": {
     "a1b": "fit"
    },
    "name": "Functional-beauty theorist",
    "who": []
   },
   {
    "when": {
     "a1b": "transient"
    },
    "name": "Lover of wabi-sabi",
    "who": []
   },
   {
    "when": {
     "a1a": "better"
    },
    "name": "Humean about taste",
    "who": [
     "hume"
    ]
   },
   {
    "when": {
     "a1a": "kant"
    },
    "name": "Kantian about beauty",
    "who": [
     "kant"
    ]
   },
   {
    "when": {
     "a1a": "relative"
    },
    "name": "Aesthetic relativist",
    "who": []
   },
   {
    "when": {
     "a1a": "none"
    },
    "name": "Subjectivist about taste",
    "who": []
   },
   {
    "when": {
     "a1c": "quasi"
    },
    "name": "Aesthetic quasi-realist",
    "who": []
   },
   {
    "when": {
     "a1": "neither",
     "a1c": "emotiv"
    },
    "name": "Expressivist about beauty",
    "who": [
     "ayer"
    ]
   },
   {
    "when": {
     "a1": "thing"
    },
    "name": "Aesthetic realist",
    "who": []
   }
  ],
  "life": [
   {
    "when": {
     "l1": "no",
     "l1c": "pessim",
     "l8": [
      "pessim",
      "harm"
     ]
    },
    "name": "Schopenhauerian pessimist",
    "who": [
     "schopenhauer"
    ]
   },
   {
    "when": {
     "l8": "harm",
     "l2": "yes",
     "l5": [
      "end",
      "unsure"
     ]
    },
    "name": "Anti-natalist",
    "who": [
     "benatar"
    ]
   },
   {
    "when": {
     "l2b": "noself",
     "l6": "accept"
    },
    "name": "Buddhist about death",
    "who": [
     "buddha",
     "dogen"
    ]
   },
   {
    "when": {
     "l2b": "natural",
     "l6": "accept"
    },
    "name": "Daoist about death",
    "who": [
     "zhuangzi"
    ]
   },
   {
    "when": {
     "l2b": "natural",
     "l6": "remember"
    },
    "name": "Stoic about death",
    "who": [
     "marcus_aurelius",
     "seneca",
     "epictetus"
    ]
   },
   {
    "when": {
     "l2b": "epicur",
     "l2c": "sym"
    },
    "name": "Lucretian",
    "who": [
     "lucretius"
    ]
   },
   {
    "when": {
     "l2b": "epicur",
     "l3": "same"
    },
    "name": "Epicurean",
    "who": [
     "epicurus",
     "lucretius"
    ]
   },
   {
    "when": {
     "l2b": "epicur",
     "l6": "calm"
    },
    "name": "Epicurean about death",
    "who": [
     "epicurus"
    ]
   },
   {
    "when": {
     "l2a": "early",
     "l7": "bored"
    },
    "name": "Life-plan theorist about death",
    "who": [
     "williams"
    ],
    "subtitle": "Death is bad when it cuts off your plans"
   },
   {
    "when": {
     "l2a": "depriv",
     "l2c": "asym",
     "l7": "yes"
    },
    "name": "Deprivationist about death",
    "who": [
     "nagel"
    ],
    "subtitle": "Death is bad because it takes away good years"
   },
   {
    "when": {
     "l1a": "god",
     "l1f": "no"
    },
    "name": "Extreme supernaturalist",
    "who": [
     "tolstoy",
     "augustine",
     "craig"
    ]
   },
   {
    "when": {
     "l1a": "god",
     "l1f": "less"
    },
    "name": "Moderate supernaturalist",
    "who": [
     "swinburne"
    ]
   },
   {
    "when": {
     "l1a": "god",
     "l5": [
      "soul",
      "resur"
     ]
    },
    "name": "Theist about life and death",
    "who": [
     "aquinas",
     "swinburne"
    ]
   },
   {
    "when": {
     "l1": "no",
     "l1c": "revolt"
    },
    "name": "Absurdist",
    "who": [
     "camus"
    ]
   },
   {
    "when": {
     "l1": "no",
     "l1c": "irony"
    },
    "name": "Ironic absurdist",
    "who": [
     "nagel"
    ]
   },
   {
    "when": {
     "l1": "no",
     "l1c": "pessim"
    },
    "name": "Pessimist",
    "who": [
     "schopenhauer"
    ]
   },
   {
    "when": {
     "l1": "no",
     "l1c": "nothing",
     "l1g": "novalue"
    },
    "name": "Thoroughgoing nihilist",
    "who": []
   },
   {
    "when": {
     "l1a": "subjective",
     "l1b": "yes",
     "l5": "end"
    },
    "name": "Maker of meaning",
    "who": [
     "sartre",
     "beauvoir"
    ]
   },
   {
    "when": {
     "l1a": "subjective",
     "l1b": "yes"
    },
    "name": "Subjectivist about meaning",
    "who": [
     "richard_taylor",
     "frankfurt",
     "ayer"
    ]
   },
   {
    "when": {
     "l1a": [
      "hybrid",
      "worth"
     ],
     "l1e": "no"
    },
    "name": "Fitting-fulfilment theorist",
    "who": [
     "wolf"
    ],
    "subtitle": "Meaning needs both real caring and real worth"
   },
   {
    "when": {
     "l1a": [
      "worth",
      "hybrid"
     ],
     "l1e": "yes"
    },
    "name": "Objectivist about meaning",
    "who": [
     "singer",
     "metz"
    ]
   },
   {
    "when": {
     "l1a": "subjective",
     "l1b": "no"
    },
    "name": "Fitting-fulfilment theorist",
    "who": [
     "wolf"
    ]
   },
   {
    "when": {
     "l1": "no"
    },
    "name": "Nihilist about meaning",
    "who": []
   },
   {
    "when": {
     "l1": "confused"
    },
    "name": "Skeptic about the question",
    "who": [
     "wittgenstein"
    ]
   }
  ],
  "mind": [
   {
    "when": {
     "m2b": "conv",
     "m4": "nofact"
    },
    "name": "Buddhist reductionist",
    "who": [
     "buddha"
    ]
   },
   {
    "when": {
     "m2a": "witness",
     "m1b": "idealism"
    },
    "name": "Advaita Vedāntin",
    "who": [
     "shankara"
    ]
   },
   {
    "when": {
     "m2a": "witness",
     "m1b": "neutral"
    },
    "name": "Advaita Vedāntin",
    "who": [
     "shankara"
    ]
   },
   {
    "when": {
     "m1b": "soul",
     "m1c": "interact",
     "m2a": "simple"
    },
    "name": "Cartesian dualist",
    "who": [
     "descartes"
    ]
   },
   {
    "when": {
     "m1b": [
      "soul"
     ],
     "m1c": "parallel",
     "m3": "compat"
    },
    "name": "Ash‘arite",
    "who": [
     "alghazali"
    ],
    "subtitle": "God causes everything, yet your acts are still yours"
   },
   {
    "when": {
     "m1b": "soul",
     "m1c": "parallel"
    },
    "name": "Parallelist or occasionalist",
    "who": [
     "leibniz",
     "alghazali"
    ]
   },
   {
    "when": {
     "m1b": "neutral",
     "m3": "no"
    },
    "name": "Spinozist",
    "who": [
     "spinoza"
    ]
   },
   {
    "when": {
     "m2b": "bundle",
     "m3": "compat"
    },
    "name": "Humean",
    "who": [
     "hume"
    ]
   },
   {
    "when": {
     "m1b": "form"
    },
    "name": "Hylomorphist",
    "who": [
     "aristotle",
     "aquinas"
    ],
    "subtitle": "The soul is the body’s form, not a ghost inside it"
   },
   {
    "when": {
     "m1a": "folk"
    },
    "name": "Eliminativist",
    "who": [
     "churchland",
     "rorty"
    ]
   },
   {
    "when": {
     "m1a": "elim"
    },
    "name": "Illusionist about consciousness",
    "who": [
     "dennett",
     "frankish"
    ]
   },
   {
    "when": {
     "m1b": "panpsych"
    },
    "name": "Panpsychist",
    "who": [
     "goff"
    ]
   },
   {
    "when": {
     "m1b": "idealism"
    },
    "name": "Idealist",
    "who": [
     "berkeley"
    ]
   },
   {
    "when": {
     "m1b": "neutral"
    },
    "name": "Neutral monist",
    "who": [
     "russell",
     "james"
    ]
   },
   {
    "when": {
     "m1c": "epiphen"
    },
    "name": "Epiphenomenalist",
    "who": [
     "huxley"
    ],
    "subtitle": "Feelings are real but cause nothing"
   },
   {
    "when": {
     "m1b": "soul"
    },
    "name": "Substance dualist",
    "who": [
     "descartes",
     "swinburne"
    ]
   },
   {
    "when": {
     "m1b": "propdual"
    },
    "name": "Property dualist",
    "who": [
     "chalmers"
    ]
   },
   {
    "when": {
     "m1a": "mystery"
    },
    "name": "Mysterian",
    "who": [
     "mcginn"
    ]
   },
   {
    "when": {
     "m3": "no",
     "m3d": "illusion"
    },
    "name": "Illusionist about free will",
    "who": [
     "smilansky"
    ]
   },
   {
    "when": {
     "m3f": "selfmade"
    },
    "name": "Free will impossibilist",
    "who": [
     "gstrawson"
    ],
    "subtitle": "Free will would mean making yourself, which no one can"
   },
   {
    "when": {
     "m3f": "luck"
    },
    "name": "Hard incompatibilist",
    "who": [
     "pereboom"
    ],
    "subtitle": "No free will, whether or not everything is determined"
   },
   {
    "when": {
     "m3d": "quarantine"
    },
    "name": "Public-health skeptic",
    "who": [
     "pereboom",
     "caruso"
    ],
    "subtitle": "No one deserves blame; protect people the way a quarantine does"
   },
   {
    "when": {
     "m3f": "determ"
    },
    "name": "Hard determinist",
    "who": [
     "holbach",
     "spinoza"
    ]
   },
   {
    "when": {
     "m3": "no"
    },
    "name": "Free will skeptic",
    "who": [
     "pereboom"
    ]
   },
   {
    "when": {
     "m3b": "agent"
    },
    "name": "Agent-causal libertarian",
    "who": [
     "reid",
     "chisholm",
     "swinburne"
    ]
   },
   {
    "when": {
     "m3": "libert",
     "m3e": [
      "no",
      "dilemma"
     ]
    },
    "name": "Leeway libertarian",
    "who": [
     "kane",
     "vaninwagen"
    ],
    "subtitle": "Free will needs real alternatives, and we have them"
   },
   {
    "when": {
     "m3b": "event"
    },
    "name": "Event-causal libertarian",
    "who": [
     "kane"
    ]
   },
   {
    "when": {
     "m3": "libert"
    },
    "name": "Libertarian about free will",
    "who": [
     "kane"
    ]
   },
   {
    "when": {
     "m2b": "conv"
    },
    "name": "Buddhist about the self",
    "who": [
     "buddha"
    ]
   },
   {
    "when": {
     "m2a": "witness"
    },
    "name": "Witness-self theorist",
    "who": [
     "shankara"
    ]
   },
   {
    "when": {
     "m2b": "noself"
    },
    "name": "No-self theorist",
    "who": [
     "metzinger"
    ]
   },
   {
    "when": {
     "m1": [
      "yes",
      "unclear"
     ],
     "m6": "stuff"
    },
    "name": "Biological naturalist",
    "who": [
     "searle"
    ],
    "subtitle": "Minds need brain-like biology, not just the right program"
   },
   {
    "when": {
     "m4": "you",
     "m6": "program"
    },
    "name": "Patternist",
    "who": [],
    "subtitle": "You are a pattern of information, wherever it runs"
   },
   {
    "when": {
     "m1a": "function"
    },
    "name": "Functionalist",
    "who": [
     "putnam",
     "shoemaker",
     "harman"
    ]
   },
   {
    "when": {
     "m1a": "identity"
    },
    "name": "Mind-brain identity theorist",
    "who": [
     "smart",
     "armstrong",
     "lewis"
    ]
   },
   {
    "when": {
     "m3c": "reasons"
    },
    "name": "Reasons-responsiveness compatibilist",
    "who": [
     "fischer"
    ],
    "subtitle": "Free means your choice would change if there were good reason"
   },
   {
    "when": {
     "m4a": "nomatter"
    },
    "name": "Parfitian reductionist",
    "who": [
     "parfit"
    ],
    "subtitle": "Survival matters; strict identity does not"
   },
   {
    "when": {
     "m4": "nofact"
    },
    "name": "Reductionist about personal identity",
    "who": [
     "parfit"
    ]
   },
   {
    "when": {
     "m4b": "body"
    },
    "name": "Animalist",
    "who": [
     "olson",
     "vaninwagen"
    ],
    "subtitle": "You are a human animal"
   },
   {
    "when": {
     "m3": "unsure"
    },
    "name": "Free will agnostic",
    "who": [
     "balaguer"
    ]
   },
   {
    "when": {
     "m1": "unclear"
    },
    "name": "Quietist about the mind-body problem",
    "who": [],
    "subtitle": "“Physical” is too unclear for the question to have an answer"
   },
   {
    "when": {
     "m1": "yes"
    },
    "name": "Physicalist",
    "who": [
     "smart",
     "dennett"
    ]
   },
   {
    "when": {
     "m1": "no"
    },
    "name": "Non-physicalist",
    "who": [
     "chalmers"
    ]
   }
  ],
  "god": [
   {
    "when": {
     "k9f": "mystery",
     "k9j": "plural"
    },
    "name": "Religious pluralist",
    "who": [
     "hick"
    ]
   },
   {
    "when": {
     "k9f": "absolute",
     "k9d": "reveal"
    },
    "name": "Advaita Vedantin",
    "who": [
     "shankara"
    ]
   },
   {
    "when": {
     "k9f": "absolute"
    },
    "name": "Non-dualist",
    "who": [
     "plotinus",
     "shankara"
    ]
   },
   {
    "when": {
     "k9f": "dao"
    },
    "name": "Daoist",
    "who": [
     "laozi",
     "zhuangzi"
    ]
   },
   {
    "when": {
     "k9f": "nirvana"
    },
    "name": "Buddhist non-theist",
    "who": [
     "buddha"
    ]
   },
   {
    "when": {
     "k9f": "moksha"
    },
    "name": "Jain non-theist",
    "who": []
   },
   {
    "when": {
     "k9f": "mystery"
    },
    "name": "Mystic",
    "who": []
   },
   {
    "when": {
     "k9": "ultimate"
    },
    "name": "Religious non-theist",
    "who": [
     "laozi",
     "buddha",
     "shankara"
    ]
   },
   {
    "when": {
     "k9a": [
      "theism",
      "panentheism"
     ],
     "k9j": "plural"
    },
    "name": "Religious pluralist",
    "who": [
     "hick"
    ]
   },
   {
    "when": {
     "k9a": "panentheism",
     "k9k": "limited"
    },
    "name": "Process theist",
    "who": [
     "whitehead",
     "hartshorne"
    ]
   },
   {
    "when": {
     "k9a": "panentheism"
    },
    "name": "Panentheist",
    "who": [
     "hegel"
    ]
   },
   {
    "when": {
     "k9a": [
      "theism",
      "open"
     ],
     "k9d": "basic"
    },
    "name": "Reformed epistemologist",
    "who": [
     "plantinga",
     "alston"
    ],
    "subtitle": "Belief in God can be reasonable without argument"
   },
   {
    "when": {
     "k9a": [
      "theism",
      "open"
     ],
     "k9d": "arguments"
    },
    "name": "Natural theologian",
    "who": [
     "aquinas",
     "avicenna",
     "swinburne",
     "leibniz"
    ]
   },
   {
    "when": {
     "k9a": "open"
    },
    "name": "Open theist",
    "who": []
   },
   {
    "when": {
     "k9a": "pantheism"
    },
    "name": "Pantheist",
    "who": [
     "spinoza"
    ]
   },
   {
    "when": {
     "k9a": "deism"
    },
    "name": "Deist",
    "who": [
     "voltaire",
     "paine"
    ]
   },
   {
    "when": {
     "k9a": "poly"
    },
    "name": "Polytheist",
    "who": []
   },
   {
    "when": {
     "k9a": "theism",
     "k9k": "limited"
    },
    "name": "Limited theist",
    "who": [
     "mill"
    ]
   },
   {
    "when": {
     "k9a": "theism",
     "k9d": "fideism"
    },
    "name": "Fideist",
    "who": [
     "kierkegaard",
     "pascal"
    ]
   },
   {
    "when": {
     "k9a": "theism",
     "k9d": "moral"
    },
    "name": "Moral theist",
    "who": [
     "kant",
     "adams_rm"
    ]
   },
   {
    "when": {
     "k9a": "theism",
     "k9d": "experience"
    },
    "name": "Theist of experience",
    "who": [
     "alston"
    ]
   },
   {
    "when": {
     "k9a": "theism",
     "k9d": "reveal"
    },
    "name": "Theist of revelation",
    "who": [
     "augustine",
     "alghazali"
    ]
   },
   {
    "when": {
     "k9": "yes"
    },
    "name": "Theist",
    "who": [
     "augustine",
     "aquinas",
     "plantinga"
    ]
   },
   {
    "when": {
     "k9": "no",
     "k9b": "evidence",
     "k9k": "logical"
    },
    "name": "Logical atheist",
    "who": [
     "mackie"
    ]
   },
   {
    "when": {
     "k9": "no",
     "k9b": "incoherent"
    },
    "name": "Atheist from incoherence",
    "who": []
   },
   {
    "when": {
     "k9": "no",
     "k9b": "nocreator"
    },
    "name": "Atheist (Buddhist argument)",
    "who": []
   },
   {
    "when": {
     "k9": "no",
     "k9b": "hidden"
    },
    "name": "Hiddenness atheist",
    "who": []
   },
   {
    "when": {
     "k9": "no",
     "k9b": "evidence"
    },
    "name": "Evidential atheist",
    "who": [
     "rowe"
    ]
   },
   {
    "when": {
     "k9": "no",
     "k9b": "debunk"
    },
    "name": "Debunking atheist",
    "who": []
   },
   {
    "when": {
     "k9": "no",
     "k9b": "diversity"
    },
    "name": "Atheist from religious diversity",
    "who": []
   },
   {
    "when": {
     "k9": "no",
     "k9b": "default",
     "k1": [
      "true",
      "selective"
     ]
    },
    "name": "Scientific naturalist",
    "who": [
     "russell",
     "quine",
     "dennett"
    ]
   },
   {
    "when": {
     "k9": "no",
     "k9b": "default"
    },
    "name": "Atheist by default",
    "who": [
     "russell"
    ]
   },
   {
    "when": {
     "k9": "no"
    },
    "name": "Atheist",
    "who": [
     "russell",
     "mackie"
    ]
   },
   {
    "when": {
     "k9": "agnostic",
     "k9e": "bet"
    },
    "name": "Pascalian wagerer",
    "who": [
     "pascal"
    ]
   },
   {
    "when": {
     "k9": "agnostic",
     "k9e": "will"
    },
    "name": "Agnostic open to faith",
    "who": [
     "mill"
    ]
   },
   {
    "when": {
     "k9": "agnostic",
     "k9m": "beyond"
    },
    "name": "Strong agnostic",
    "who": [
     "protagoras",
     "huxley"
    ]
   },
   {
    "when": {
     "k9j": "practice",
     "k9": [
      "agnostic",
      "nomeaning"
     ]
    },
    "name": "Religious non-realist",
    "who": [
     "phillips_dz",
     "wittgenstein"
    ],
    "subtitle": "Religion is a way of living, not a theory about the world"
   },
   {
    "when": {
     "k9": "agnostic"
    },
    "name": "Agnostic",
    "who": []
   },
   {
    "when": {
     "k9": "nomeaning"
    },
    "name": "Theological noncognitivist",
    "who": [
     "ayer",
     "carnap"
    ],
    "subtitle": "“God exists” has no clear meaning"
   }
  ],
  "reality": [
   {
    "when": {
     "k8a": "god"
    },
    "name": "Occasionalist",
    "who": [
     "alghazali"
    ],
    "subtitle": "God is the only real cause"
   },
   {
    "when": {
     "k4": "pointless",
     "k12": "verbal"
    },
    "name": "Logical positivist",
    "who": [
     "carnap",
     "ayer"
    ]
   },
   {
    "when": {
     "k12": "nihil",
     "m2b": "conv"
    },
    "name": "Buddhist reductionist",
    "who": [
     "buddha"
    ]
   },
   {
    "when": {
     "k4a": "ideal"
    },
    "name": "Idealist",
    "who": [
     "berkeley"
    ]
   },
   {
    "when": {
     "k4": "no",
     "k4b": "pyrrho"
    },
    "name": "Pyrrhonian skeptic",
    "who": [
     "pyrrho",
     "sextus",
     "montaigne"
    ]
   },
   {
    "when": {
     "k4": "no",
     "k4b": "natural"
    },
    "name": "Humean skeptic",
    "who": [
     "hume"
    ]
   },
   {
    "when": {
     "k4": "no",
     "k4b": "academic"
    },
    "name": "Academic skeptic",
    "who": [
     "carneades"
    ]
   },
   {
    "when": {
     "k1": "true",
     "k13": "pragma"
    },
    "name": "Internal realist",
    "who": [
     "putnam"
    ],
    "subtitle": "Truth is what ideal inquiry would accept"
   },
   {
    "when": {
     "k1b": "empirical"
    },
    "name": "Constructive empiricist",
    "who": [
     "van_fraassen"
    ],
    "subtitle": "Science only needs to get what we can observe right"
   },
   {
    "when": {
     "k1b": "pragmatic"
    },
    "name": "Pragmatist about science",
    "who": [
     "james",
     "dewey",
     "rorty"
    ]
   },
   {
    "when": {
     "k1": "true",
     "k2a": "indisp"
    },
    "name": "Quinean naturalist",
    "who": [
     "quine",
     "putnam"
    ]
   },
   {
    "when": {
     "k3": "rational",
     "k2": "yes"
    },
    "name": "Rationalist Platonist",
    "who": [
     "plato",
     "descartes",
     "godel"
    ]
   },
   {
    "when": {
     "k8": "no",
     "k7": "yes"
    },
    "name": "Humean naturalist",
    "who": [
     "lewis",
     "smart"
    ],
    "subtitle": "No hidden forces behind causes, and all times are equally real"
   },
   {
    "when": {
     "k8": "no",
     "k3": "empiric"
    },
    "name": "Humean empiricist",
    "who": [
     "hume"
    ]
   },
   {
    "when": {
     "k4": "pointless"
    },
    "name": "Verificationist",
    "who": [
     "ayer",
     "carnap"
    ]
   },
   {
    "when": {
     "k4a": "struct"
    },
    "name": "Simulation realist",
    "who": [
     "chalmers"
    ]
   },
   {
    "when": {
     "k4a": "hinge"
    },
    "name": "Hinge epistemologist",
    "who": [
     "wittgenstein"
    ]
   },
   {
    "when": {
     "k3": "kant"
    },
    "name": "Kantian",
    "who": [
     "kant",
     "schopenhauer"
    ]
   },
   {
    "when": {
     "k12": "monism"
    },
    "name": "Monist",
    "who": [
     "parmenides",
     "spinoza",
     "shankara"
    ]
   },
   {
    "when": {
     "k12": "nihil"
    },
    "name": "Mereological nihilist",
    "who": [
     "unger"
    ],
    "subtitle": "Only tiny particles truly exist; chairs are just arrangements"
   },
   {
    "when": {
     "k12": "organic"
    },
    "name": "Organicist",
    "who": [
     "vaninwagen"
    ],
    "subtitle": "Only living things are true wholes"
   },
   {
    "when": {
     "k8a": "powers"
    },
    "name": "Powers metaphysician",
    "who": [
     "aristotle",
     "mumford"
    ]
   },
   {
    "when": {
     "k11": "basic"
    },
    "name": "Knowledge-first epistemologist",
    "who": [
     "williamson"
    ],
    "subtitle": "Knowing is basic, not belief plus extras"
   },
   {
    "when": {
     "k4a": "common"
    },
    "name": "Common-sense philosopher",
    "who": [
     "moore",
     "reid"
    ]
   },
   {
    "when": {
     "k4a": "abduct"
    },
    "name": "Explanationist",
    "who": [
     "russell"
    ]
   },
   {
    "when": {
     "k2b": "fiction"
    },
    "name": "Mathematical fictionalist",
    "who": [
     "field"
    ]
   },
   {
    "when": {
     "k2b": "construct"
    },
    "name": "Intuitionist",
    "who": [
     "brouwer"
    ]
   },
   {
    "when": {
     "k4a": "context"
    },
    "name": "Contextualist",
    "who": [
     "lewis"
    ]
   },
   {
    "when": {
     "k12": "universal"
    },
    "name": "Universalist",
    "who": [
     "lewis"
    ],
    "subtitle": "Any things at all make up a whole"
   },
   {
    "when": {
     "k12": "verbal"
    },
    "name": "Ontological deflationist",
    "who": [
     "carnap",
     "hirsch"
    ],
    "subtitle": "Questions about what exists are questions about words"
   },
   {
    "when": {
     "k13": "plural"
    },
    "name": "Truth pluralist",
    "who": []
   },
   {
    "when": {
     "k13": "pragma"
    },
    "name": "Pragmatist",
    "who": [
     "peirce",
     "james",
     "dewey"
    ]
   },
   {
    "when": {
     "k13": "deflate"
    },
    "name": "Deflationist about truth",
    "who": [
     "quine",
     "field"
    ]
   },
   {
    "when": {
     "k11": "track"
    },
    "name": "Truth-tracker",
    "who": [
     "nozick"
    ],
    "subtitle": "To know, your belief must follow the truth"
   },
   {
    "when": {
     "k7": "growing"
    },
    "name": "Growing block theorist",
    "who": [
     "broad",
     "tooley"
    ]
   },
   {
    "when": {
     "k7": "yes"
    },
    "name": "Block universe theorist",
    "who": [
     "einstein",
     "smart",
     "sider"
    ]
   },
   {
    "when": {
     "k7": "present"
    },
    "name": "Presentist",
    "who": [
     "augustine",
     "prior"
    ]
   },
   {
    "when": {
     "k3": "rational"
    },
    "name": "Rationalist",
    "who": [
     "descartes",
     "leibniz"
    ]
   },
   {
    "when": {
     "k3": "empiric"
    },
    "name": "Empiricist",
    "who": [
     "locke",
     "hume"
    ]
   }
  ],
  "society": [
   {
    "when": {
     "s7": [
      "no",
      "nofact"
     ],
     "s7b": "market",
     "s8": "no"
    },
    "name": "Anarcho-capitalist",
    "who": [
     "rothbard",
     "huemer",
     "david_friedman"
    ]
   },
   {
    "when": {
     "s7": "no",
     "s7b": "coop",
     "s8": [
      "yes",
      "rules"
     ]
    },
    "name": "Social anarchist",
    "who": [
     "kropotkin",
     "tolstoy"
    ]
   },
   {
    "when": {
     "s7": "no",
     "s7b": "indiv",
     "s8": "no"
    },
    "name": "Individualist anarchist",
    "who": [
     "stirner",
     "tucker"
    ]
   },
   {
    "when": {
     "s8": "no",
     "s8b": [
      "no",
      "floor"
     ],
     "s6": [
      "conserv",
      "restore"
     ]
    },
    "name": "Free-market conservative",
    "who": [
     "burke"
    ]
   },
   {
    "when": {
     "s8": "no",
     "s8b": "commons"
    },
    "name": "Left-libertarian",
    "who": [
     "paine"
    ]
   },
   {
    "when": {
     "s8": "no",
     "s8b": "no"
    },
    "name": "Libertarian",
    "who": [
     "nozick"
    ]
   },
   {
    "when": {
     "s8": "no",
     "s8b": "floor"
    },
    "name": "Classical liberal",
    "who": [
     "hayek",
     "smith"
    ]
   },
   {
    "when": {
     "s8a": "common",
     "s6": "radical"
    },
    "name": "Revolutionary socialist",
    "who": [
     "marx",
     "davis_angela"
    ]
   },
   {
    "when": {
     "s8a": "common"
    },
    "name": "Socialist",
    "who": [
     "marx",
     "ga_cohen"
    ]
   },
   {
    "when": {
     "s7b": "market"
    },
    "name": "Anarcho-capitalist",
    "who": [
     "rothbard",
     "huemer",
     "david_friedman"
    ]
   },
   {
    "when": {
     "s7b": "coop"
    },
    "name": "Social anarchist",
    "who": [
     "kropotkin",
     "tolstoy"
    ]
   },
   {
    "when": {
     "s7b": "indiv"
    },
    "name": "Individualist anarchist",
    "who": [
     "stirner",
     "tucker"
    ]
   },
   {
    "when": {
     "s3": "no",
     "s3b": "heir"
    },
    "name": "Monarchist",
    "who": [
     "de_maistre",
     "filmer"
    ]
   },
   {
    "when": {
     "s13": "relig",
     "s6": [
      "restore",
      "radical"
     ]
    },
    "name": "Religious restorationist",
    "who": [
     "de_maistre",
     "qutb"
    ]
   },
   {
    "when": {
     "s13": "relig",
     "s6": [
      "conserv",
      "piecemeal"
     ]
    },
    "name": "Religious traditionalist",
    "who": [
     "aquinas"
    ]
   },
   {
    "when": {
     "s3": "no",
     "s3b": "merit"
    },
    "name": "Political meritocrat",
    "who": [
     "daniel_bell",
     "confucius",
     "mencius",
     "plato"
    ]
   },
   {
    "when": {
     "s3": "no",
     "s3b": "epistoc"
    },
    "name": "Epistocrat",
    "who": [
     "brennan"
    ],
    "subtitle": "Those who know more should have more say"
   },
   {
    "when": {
     "s3": "no",
     "s3b": "perform",
     "s7a": "consent"
    },
    "name": "Hobbesian",
    "who": [
     "hobbes"
    ]
   },
   {
    "when": {
     "s6": "conserv",
     "s13": "commun"
    },
    "name": "Conservative",
    "who": [
     "burke"
    ]
   },
   {
    "when": {
     "s6": "conserv",
     "s12": "nation"
    },
    "name": "National conservative",
    "who": [
     "scruton"
    ]
   },
   {
    "when": {
     "s8a": "settled",
     "s6": [
      "conserv",
      "piecemeal",
      "restore"
     ]
    },
    "name": "Humean conservative",
    "who": [
     "hume",
     "oakeshott"
    ]
   },
   {
    "when": {
     "s6": "restore",
     "s13": [
      "commun",
      "perfect"
     ]
    },
    "name": "Restorationist",
    "who": [
     "macintyre",
     "confucius"
    ]
   },
   {
    "when": {
     "s1": "abolish"
    },
    "name": "Penal abolitionist",
    "who": [
     "christie"
    ]
   },
   {
    "when": {
     "s13": "commun",
     "s8a": [
      "desert",
      "status",
      "enough"
     ]
    },
    "name": "Communitarian",
    "who": [
     "sandel",
     "walzer",
     "hegel"
    ]
   },
   {
    "when": {
     "s7b": "nofact"
    },
    "name": "Political skeptic",
    "who": [
     "stirner",
     "garner"
    ]
   },
   {
    "when": {
     "s7": "nofact",
     "s8": "nofact"
    },
    "name": "Political skeptic",
    "who": [
     "stirner",
     "garner"
    ]
   },
   {
    "when": {
     "s12": "cosmo",
     "s8a": [
      "diff",
      "enough"
     ]
    },
    "name": "Cosmopolitan",
    "who": [
     "nussbaum",
     "pogge"
    ]
   },
   {
    "when": {
     "s6": "radical",
     "s8a": [
      "status",
      "luck",
      "diff"
     ]
    },
    "name": "Radical egalitarian",
    "who": [
     "fanon",
     "du_bois"
    ]
   },
   {
    "when": {
     "s10": "nondom",
     "s8a": [
      "status",
      "enough"
     ]
    },
    "name": "Republican (freedom as non-domination)",
    "who": [
     "pettit",
     "machiavelli",
     "wollstonecraft"
    ]
   },
   {
    "when": {
     "s8a": [
      "diff",
      "luck",
      "status",
      "enough"
     ],
     "s10": "means",
     "s6": "piecemeal"
    },
    "name": "Social democrat",
    "who": [
     "bernstein",
     "dewey"
    ]
   },
   {
    "when": {
     "s5": "never",
     "s4": "harm",
     "s8a": [
      "welfare",
      "prior"
     ]
    },
    "name": "Millian liberal",
    "who": [
     "mill"
    ]
   },
   {
    "when": {
     "s13": "perfect",
     "s8a": [
      "desert",
      "enough",
      "welfare"
     ]
    },
    "name": "Perfectionist",
    "who": [
     "aristotle",
     "raz"
    ],
    "subtitle": "The state may promote good lives"
   },
   {
    "when": {
     "s12": "nation",
     "s8a": [
      "desert",
      "enough",
      "status"
     ]
    },
    "name": "Liberal nationalist",
    "who": [
     "david_miller",
     "mill"
    ]
   },
   {
    "when": {
     "s8a": "diff"
    },
    "name": "Rawlsian liberal",
    "who": [
     "rawls",
     "nagel"
    ]
   },
   {
    "when": {
     "s8a": "luck"
    },
    "name": "Luck egalitarian",
    "who": [
     "dworkin",
     "ga_cohen"
    ],
    "subtitle": "Inequality is fair only when it comes from choices, not luck"
   },
   {
    "when": {
     "s8a": "status"
    },
    "name": "Relational egalitarian",
    "who": [
     "anderson_e",
     "ambedkar"
    ],
    "subtitle": "No one should have to bow to anyone"
   },
   {
    "when": {
     "s8a": "prior"
    },
    "name": "Prioritarian",
    "who": [
     "parfit"
    ]
   },
   {
    "when": {
     "s8a": "enough"
    },
    "name": "Sufficientarian",
    "who": [
     "frankfurt"
    ],
    "subtitle": "Enough for everyone matters more than equal shares"
   },
   {
    "when": {
     "s8a": "welfare"
    },
    "name": "Utilitarian",
    "who": [
     "bentham",
     "singer"
    ]
   },
   {
    "when": {
     "s8a": "desert"
    },
    "name": "Desert theorist",
    "who": [
     "david_miller",
     "aristotle"
    ]
   },
   {
    "when": {
     "s7": "no",
     "s7b": "keep"
    },
    "name": "Philosophical anarchist",
    "who": [
     "simmons",
     "rp_wolff",
     "raz"
    ]
   },
   {
    "when": {
     "s6": "conserv"
    },
    "name": "Conservative",
    "who": [
     "burke",
     "oakeshott"
    ]
   },
   {
    "when": {
     "s6": "radical"
    },
    "name": "Radical",
    "who": [
     "fanon",
     "marx"
    ]
   },
   {
    "when": {
     "s6": "restore"
    },
    "name": "Restorationist",
    "who": [
     "macintyre",
     "confucius"
    ]
   },
   {
    "when": {
     "s10": "nondom"
    },
    "name": "Republican (freedom as non-domination)",
    "who": [
     "machiavelli",
     "wollstonecraft"
    ]
   },
   {
    "when": {
     "s13": "commun"
    },
    "name": "Communitarian",
    "who": [
     "sandel",
     "walzer",
     "hegel"
    ]
   },
   {
    "when": {
     "s13": "perfect"
    },
    "name": "Perfectionist",
    "who": [
     "aristotle",
     "raz"
    ]
   },
   {
    "when": {
     "s13": "neutral"
    },
    "name": "Liberal",
    "who": [
     "locke",
     "rawls"
    ]
   }
  ]
 },
 "legacy": {
  "q1": "e4",
  "q1b": "e4b",
  "q2": "e1",
  "q3": "e2",
  "q3b": "e2a",
  "q4": "e5",
  "q5": "a1",
  "q6": "m1",
  "q7": "m2",
  "q8": "m3",
  "q9": "s1",
  "q10": "m4",
  "q11": "k1",
  "q12": "k2",
  "q13": "k3",
  "q14": "k4",
  "q15": "k12",
  "q16": null,
  "q17": "k7",
  "q18": "k8",
  "q19": "k9",
  "q20": "l1",
  "q21": "m5",
  "q22": "l2",
  "q23": "s8",
  "q24": "s3",
  "q25": "s8",
  "q26": "s4",
  "q27": "s5",
  "q28": "s6"
 },
 "convert": {
  "q1": {
   "conseq": [
    [
     "e4",
     "results"
    ],
    [
     "e4a",
     "everyone"
    ]
   ],
   "egoism": [
    [
     "e4",
     "results"
    ],
    [
     "e4a",
     "me"
    ]
   ],
   "deont": [
    [
     "e4",
     "duties"
    ],
    [
     "e4e",
     "deont"
    ]
   ],
   "virtue": [
    [
     "e4",
     "virtue"
    ]
   ],
   "contract": [
    [
     "e4",
     "duties"
    ],
    [
     "e4e",
     "contract"
    ]
   ],
   "divine": [
    [
     "e4",
     "duties"
    ],
    [
     "e4e",
     "divine"
    ]
   ],
   "partial": [
    [
     "e4",
     "care"
    ]
   ],
   "plural": [
    [
     "e4",
     "plural"
    ]
   ],
   "nothing": [
    [
     "e4",
     "nothing"
    ]
   ],
   "conseq+egoism": [
    [
     "e4",
     "results"
    ],
    [
     "e4a",
     "both"
    ]
   ]
  },
  "q1b": {
   "act": [
    [
     "e4b",
     "act"
    ]
   ],
   "twolevel": [
    [
     "e4b",
     "twolevel"
    ]
   ],
   "rule": [
    [
     "e4b",
     "rule"
    ]
   ]
  },
  "q2": {
   "req": [
    [
     "e1",
     "req"
    ]
   ],
   "allow": [
    [
     "e1",
     "allow"
    ]
   ],
   "wrong": [
    [
     "e1",
     "wrong"
    ]
   ]
  },
  "q3": {
   "req": [
    [
     "e2",
     "req"
    ]
   ],
   "allow": [
    [
     "e2",
     "allow"
    ]
   ],
   "wrong": [
    [
     "e2",
     "wrong"
    ]
   ]
  },
  "q3b": {
   "means": [
    [
     "e2a",
     "means"
    ]
   ],
   "redirect": [
    [
     "e2a",
     "redirect"
    ]
   ],
   "force": [
    [
     "e2a",
     "force"
    ]
   ],
   "twolevel": [
    [
     "e2a",
     "twolevel"
    ]
   ]
  },
  "q4": {
   "realism": [
    [
     "e5",
     "yes"
    ]
   ],
   "relativism": [
    [
     "e5",
     "no"
    ],
    [
     "e5a",
     "relativism"
    ]
   ],
   "error": [
    [
     "e5",
     "no"
    ],
    [
     "e5a",
     "error"
    ]
   ],
   "noncog": [
    [
     "e5",
     "no"
    ],
    [
     "e5a",
     "noncog"
    ]
   ]
  },
  "q5": {
   "realism": [
    [
     "a1",
     "thing"
    ]
   ],
   "response": [
    [
     "a1",
     "us"
    ],
    [
     "a1a",
     "better"
    ]
   ],
   "subjective": [
    [
     "a1",
     "us"
    ],
    [
     "a1a",
     "none"
    ]
   ],
   "noncog": [
    [
     "a1",
     "neither"
    ]
   ]
  },
  "q6": {
   "physical": [
    [
     "m1",
     "yes"
    ]
   ],
   "propdual": [
    [
     "m1",
     "no"
    ],
    [
     "m1b",
     "propdual"
    ]
   ],
   "subdual": [
    [
     "m1",
     "no"
    ],
    [
     "m1b",
     "soul"
    ]
   ],
   "panpsych": [
    [
     "m1",
     "no"
    ],
    [
     "m1b",
     "panpsych"
    ]
   ],
   "idealism": [
    [
     "m1",
     "no"
    ],
    [
     "m1b",
     "idealism"
    ]
   ]
  },
  "q7": {
   "simple": [
    [
     "m2",
     "yes"
    ],
    [
     "m2a",
     "simple"
    ]
   ],
   "person": [
    [
     "m2",
     "yes"
    ],
    [
     "m2a",
     "person"
    ]
   ],
   "bundle": [
    [
     "m2",
     "no"
    ],
    [
     "m2b",
     "bundle"
    ]
   ],
   "noself": [
    [
     "m2",
     "no"
    ],
    [
     "m2b",
     "noself"
    ]
   ]
  },
  "q8": {
   "libert": [
    [
     "m3",
     "libert"
    ]
   ],
   "compat": [
    [
     "m3",
     "compat"
    ]
   ],
   "harddet": [
    [
     "m3",
     "no"
    ]
   ]
  },
  "q9": {
   "retrib": [
    [
     "s1",
     "retrib"
    ]
   ],
   "forward": [
    [
     "s1",
     "forward"
    ]
   ],
   "mixed": [
    [
     "s1",
     "mixed"
    ]
   ],
   "abolish": [
    [
     "s1",
     "abolish"
    ]
   ]
  },
  "q10": {
   "you": [
    [
     "m4",
     "you"
    ]
   ],
   "other": [
    [
     "m4",
     "someone"
    ]
   ],
   "nofact": [
    [
     "m4",
     "nofact"
    ]
   ]
  },
  "q11": {
   "realism": [
    [
     "k1",
     "true"
    ]
   ],
   "selective": [
    [
     "k1",
     "true"
    ],
    [
     "k1",
     "selective"
    ]
   ],
   "instrument": [
    [
     "k1",
     "tools"
    ]
   ]
  },
  "q12": {
   "platonism": [
    [
     "k2",
     "yes"
    ]
   ],
   "empiric": [
    [
     "k2",
     "no"
    ],
    [
     "k2b",
     "empiric"
    ]
   ],
   "mixed": [
    [
     "k2",
     "no"
    ],
    [
     "k2b",
     "mixed"
    ]
   ],
   "formal": [
    [
     "k2",
     "no"
    ],
    [
     "k2b",
     "formal"
    ]
   ]
  },
  "q13": {
   "rational": [
    [
     "k3",
     "rational"
    ]
   ],
   "empiric": [
    [
     "k3",
     "empiric"
    ]
   ],
   "kant": [
    [
     "k3",
     "kant"
    ]
   ]
  },
  "q14": {
   "skeptic": [
    [
     "k4",
     "no"
    ]
   ],
   "fallib": [
    [
     "k4",
     "yes"
    ],
    [
     "k4a",
     "fallib"
    ]
   ],
   "struct": [
    [
     "k4",
     "yes"
    ],
    [
     "k4a",
     "struct"
    ]
   ],
   "verif": [
    [
     "k4",
     "pointless"
    ]
   ]
  },
  "q15": {
   "realism": [],
   "ordinary": [],
   "pragmatic": [],
   "convention": []
  },
  "q16": {
   "epistem": [],
   "superval": [],
   "degree": [],
   "nihil": []
  },
  "q17": {
   "eternal": [
    [
     "k7",
     "yes"
    ]
   ],
   "growing": [
    [
     "k7",
     "growing"
    ]
   ],
   "present": [
    [
     "k7",
     "present"
    ]
   ],
   "unreal": [
    [
     "k7",
     "unreal"
    ]
   ]
  },
  "q18": {
   "powers": [
    [
     "k8",
     "yes"
    ],
    [
     "k8a",
     "powers"
    ]
   ],
   "regular": [
    [
     "k8",
     "no"
    ],
    [
     "k8b",
     "regular"
    ]
   ],
   "counter": [
    [
     "k8",
     "no"
    ],
    [
     "k8b",
     "counter"
    ]
   ],
   "project": [
    [
     "k8",
     "no"
    ],
    [
     "k8b",
     "project"
    ]
   ]
  },
  "q19": {
   "theism": [
    [
     "k9",
     "yes"
    ],
    [
     "k9a",
     "theism"
    ]
   ],
   "deism": [
    [
     "k9",
     "yes"
    ],
    [
     "k9a",
     "deism"
    ]
   ],
   "pantheism": [
    [
     "k9",
     "yes"
    ],
    [
     "k9a",
     "pantheism"
    ]
   ],
   "poly": [
    [
     "k9",
     "yes"
    ],
    [
     "k9a",
     "poly"
    ]
   ],
   "atheism": [
    [
     "k9",
     "no"
    ],
    [
     "k9b",
     "evidence"
    ]
   ],
   "default": [
    [
     "k9",
     "no"
    ],
    [
     "k9b",
     "default"
    ]
   ],
   "agnostic": [
    [
     "k9",
     "agnostic"
    ]
   ]
  },
  "q20": {
   "objective": [
    [
     "l1",
     "yes"
    ]
   ],
   "subjective": [
    [
     "l1",
     "yes"
    ],
    [
     "l1a",
     "subjective"
    ]
   ],
   "hybrid": [
    [
     "l1",
     "yes"
    ],
    [
     "l1a",
     "hybrid"
    ]
   ],
   "nihil": [
    [
     "l1",
     "no"
    ]
   ]
  },
  "q21": {
   "make": [
    [
     "m5",
     "make"
    ]
   ],
   "own": [
    [
     "m5",
     "own"
    ]
   ],
   "noult": [
    [
     "m5",
     "noult"
    ]
   ]
  },
  "q22": {
   "depriv": [
    [
     "l2",
     "yes"
    ],
    [
     "l2a",
     "depriv"
    ]
   ],
   "early": [
    [
     "l2",
     "yes"
    ],
    [
     "l2a",
     "early"
    ]
   ],
   "depriv+early": [
    [
     "l2",
     "yes"
    ],
    [
     "l2a",
     "both"
    ]
   ],
   "epicur": [
    [
     "l2",
     "no"
    ],
    [
     "l2b",
     "epicur"
    ]
   ],
   "after": [
    [
     "l2",
     "no"
    ],
    [
     "l2b",
     "after"
    ]
   ]
  },
  "q23": {
   "*": [
    [
     "s2",
     "*"
    ]
   ]
  },
  "q24": {
   "intrinsic": [
    [
     "s3",
     "intrinsic"
    ]
   ],
   "protect": [
    [
     "s3",
     "protect"
    ]
   ],
   "epistemic": [
    [
     "s3",
     "epistemic"
    ]
   ],
   "perform": [
    [
     "s3",
     "no"
    ],
    [
     "s3b",
     "perform"
    ]
   ],
   "*": [
    [
     "s3a",
     "*"
    ]
   ]
  },
  "q26": {
   "harm": [
    [
     "s4",
     "harm"
    ]
   ],
   "offense": [
    [
     "s4",
     "dignity"
    ]
   ],
   "order": [
    [
     "s4",
     "order"
    ]
   ],
   "never": [
    [
     "s4",
     "harm"
    ]
   ]
  },
  "q27": {
   "never": [
    [
     "s5",
     "never"
    ]
   ],
   "nudge": [
    [
     "s5",
     "nudge"
    ]
   ],
   "coerce": [
    [
     "s5",
     "coerce"
    ]
   ]
  },
  "q28": {
   "piecemeal": [
    [
     "s6",
     "piecemeal"
    ]
   ],
   "radical": [
    [
     "s6",
     "radical"
    ]
   ],
   "conserv": [
    [
     "s6",
     "conserv"
    ]
   ],
   "restore": [
    [
     "s6",
     "restore"
    ]
   ]
  }
 },
 "survey2": {
  "k7": {
   "s": "Time",
   "map": {
    "yes": "B-theory",
    "spotlight": "A-theory",
    "growing": "A-theory",
    "present": "A-theory"
   }
  },
  "k12": {
   "s": "Metaontology",
   "map": {
    "verbal": "Anti-realism",
    "universal": "Heavyweight realism",
    "ordinary": "Heavyweight realism",
    "organic": "Heavyweight realism",
    "nihil": "Heavyweight realism",
    "monism": "Heavyweight realism"
   }
  },
  "k4a": {
   "s": "Response to external-world skepticism",
   "map": {
    "abduct": "Abductive",
    "fallib": "Epistemic externalist",
    "common": "Dogmatist",
    "context": "Contextualist",
    "pragma": "Pragmatic"
   }
  },
  "s8a": {
   "s": "Politics",
   "map": {
    "common": "Socialism"
   }
  }
 },
 "remap": {
  "a2|form": null,
  "a3|immoral": null,
  "l1a|objective": null,
  "l1c|create": "l1a|subjective",
  "m3|yes": null,
  "m3a|libert": "m3|libert",
  "m3a|compat": "m3|compat",
  "m3d|desert": null,
  "k9c|faith": "k9c|trust",
  "k9d|believe": "k9d|fideism",
  "k1a|full": "k1|true",
  "k1a|selective": "k1|selective",
  "k5|yes": null,
  "k5|no": null,
  "k5a|ordinary": null,
  "k5a|pragmatic": null,
  "k5a|any": null,
  "k6|yes": null,
  "k6|no": null,
  "k6a|superval": null,
  "k6a|degree": null,
  "k6a|metaphys": null,
  "k6a|nihil": null,
  "k7|no": null,
  "k7a|growing": "k7|growing",
  "k7a|present": "k7|present",
  "k7b|compatible": null,
  "k7b|fatalism": null,
  "k7b|open": null,
  "s1|yes": null,
  "s1|skeptic": "s1|nofact",
  "s1a|retrib": "s1|retrib",
  "s1a|forward": "s1|forward",
  "s1a|mixed": "s1|mixed",
  "s1a|communic": "s1|communic",
  "s2|rights": null,
  "s2|conseq": "s8a|welfare",
  "s2|major": "s3|intrinsic",
  "s2|rawls": "s8a|diff",
  "s2|commun": "s13|commun",
  "s2|perfect": "s13|perfect",
  "s2|order": null,
  "s2|anarch": "s7|no",
  "s2|skeptic": null,
  "s2a|libert": "s8|no",
  "s2a|social": "s8|yes",
  "s3|yes": null,
  "s3a|intrinsic": "s3|intrinsic",
  "s3a|protect": "s3|protect",
  "s3a|epistemic": "s3|epistemic",
  "s4|yes": null,
  "s4|never": "s4|harm",
  "s4a|harm": "s4|harm",
  "s4a|offense": "s4|dignity",
  "s4a|order": "s4|order",
  "s5|yes": null,
  "s5|skeptic": "s5|nofact",
  "s5a|nudge": "s5|nudge",
  "s5a|coerce": "s5|coerce",
  "s1b|same": null,
  "s1b|more": null,
  "s1c|yes": null,
  "s1c|no": null,
  "s11|bio": null,
  "s11|social": null,
  "s11|identity": null,
  "s11|cluster": null,
  "s8a|need": "s8a|common"
 },
 "remapVersion": 6,
 "fits": [
  {
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "l5",
    [
     "end"
    ]
   ],
   "name": "Naturalist",
   "title": "The mind is the brain, and death is the end",
   "why": "If thinking and feeling are things the brain does, then when the brain stops there is nothing left to carry on, just as digestion stops with the stomach. Epicurus and Lucretius drew exactly this conclusion over 2,000 years ago, and found it comforting rather than frightening.",
   "who": [
    "epicurus",
    "lucretius"
   ]
  },
  {
   "a": [
    "m1",
    [
     "yes"
    ]
   ],
   "b": [
    "k1",
    [
     "true",
     "selective"
    ]
   ],
   "name": "Scientific naturalist",
   "title": "Science describes reality, and the mind is part of it",
   "why": "You trust science to tell you what is really out there, and you let it tell you what the mind is too. J. J. C. Smart and David Armstrong argued that if science finds brain processes doing all the work, honesty requires accepting that this is what minds are.",
   "who": [
    "smart",
    "armstrong",
    "churchland"
   ]
  },
  {
   "a": [
    "m3",
    [
     "no"
    ]
   ],
   "b": [
    "s1",
    [
     "forward"
    ]
   ],
   "name": "Free will skeptic",
   "title": "No one deserves blame, so punish only to protect",
   "why": "If no one deserves to suffer for what they do, punishment can only be justified by what it prevents, or replaced by repair. Derk Pereboom draws exactly this line: keep dangerous people from harming others, the way we quarantine the sick, and nothing more.",
   "who": [
    "pereboom"
   ]
  },
  {
   "a": [
    "k8b",
    [
     "regular"
    ]
   ],
   "b": [
    "m3",
    [
     "compat"
    ]
   ],
   "name": "Humean",
   "title": "Causes don’t force anything, so causes don’t force you",
   "why": "If a cause is just a regular pattern, not a hidden force, then being caused is not the same as being pushed or compelled. Hume used exactly this point to argue that a caused choice can still be free: what takes away freedom is force, not regularity.",
   "who": [
    "hume",
    "mill",
    "ayer"
   ]
  },
  {
   "a": [
    "k7",
    [
     "yes"
    ]
   ],
   "b": [
    "m3",
    [
     "compat"
    ]
   ],
   "name": "",
   "title": "The future is already there, yet your choices are free",
   "why": "If tomorrow already exists like a distant city, the free will worth wanting cannot be an open future. Compatibilism is the natural partner: what makes a choice free is that it comes from you, not that the future is still unwritten. David Lewis and J. J. C. Smart held both.",
   "who": [
    "lewis",
    "smart"
   ]
  },
  {
   "a": [
    "m1b",
    [
     "soul"
    ]
   ],
   "b": [
    "m3",
    [
     "libert"
    ]
   ],
   "name": "Cartesian",
   "title": "A non-physical self, free from physical chains",
   "why": "If you are a soul and not just a body, your choices need not be fixed by the chain of physical causes in your brain. That gives libertarian freedom an obvious source. Descartes and, today, Richard Swinburne combine the two.",
   "who": [
    "descartes",
    "swinburne",
    "plantinga"
   ]
  },
  {
   "a": [
    "m2",
    [
     "no"
    ]
   ],
   "b": [
    "l6",
    [
     "accept",
     "calm"
    ]
   ],
   "name": "Buddhist",
   "title": "No fixed self, so nothing to cling to",
   "why": "If there was never one lasting “me” behind the flow, then the fear of losing it at death rests on a mistake. The Buddha taught no-self precisely as a cure for clinging and the suffering it brings.",
   "who": [
    "buddha",
    "dogen"
   ]
  },
  {
   "a": [
    "m4",
    [
     "nofact"
    ]
   ],
   "b": [
    "l6",
    [
     "accept",
     "calm",
     "life"
    ]
   ],
   "name": "Parfitian",
   "title": "Personal identity matters less, and so does death",
   "why": "If “is it still me?” has no deep answer, death is less a total loss than the end of certain links between experiences. Derek Parfit said that accepting this made him care less about his own death: the glass tunnel he had lived in seemed to open up.",
   "who": [
    "parfit"
   ]
  },
  {
   "a": [
    "k8a",
    [
     "god"
    ]
   ],
   "b": [
    "m1c",
    [
     "parallel"
    ]
   ],
   "name": "Occasionalist",
   "title": "God is the only cause, in matter and mind",
   "why": "If fire never really burns cotton, and God makes the burning happen, then minds and bodies need not push each other either: God keeps them in step. Al-Ghazali and Malebranche held this one consistent picture of causation everywhere.",
   "who": [
    "alghazali",
    "malebranche"
   ]
  },
  {
   "a": [
    "k9c",
    [
     "freewill"
    ]
   ],
   "b": [
    "m3",
    [
     "libert"
    ]
   ],
   "name": "Free will theist",
   "title": "Freedom explains suffering, and freedom is real",
   "why": "The free will defence only works if our choices are not fixed in advance, since a God who set up every cause could have set them up better. Your libertarian freedom gives the defence what it needs. Alvin Plantinga and Richard Swinburne hold both.",
   "who": [
    "plantinga",
    "swinburne",
    "vaninwagen"
   ]
  },
  {
   "a": [
    "e5",
    [
     "yes"
    ]
   ],
   "b": [
    "a1",
    [
     "thing"
    ]
   ],
   "name": "Realist about value",
   "title": "Right and wrong are real, and so is beauty",
   "why": "Philosophers call this “companions in guilt”: if moral facts can exist without being physical, there is no special reason to doubt that beauty can too, and the reverse. Plato, G. E. Moore and Iris Murdoch all saw goodness and beauty as real features of things.",
   "who": [
    "plato",
    "moore",
    "murdoch",
    "adams_rm"
   ]
  },
  {
   "a": [
    "e5a",
    [
     "noncog"
    ]
   ],
   "b": [
    "a1",
    [
     "neither"
    ]
   ],
   "name": "Expressivist",
   "title": "“Wrong” and “beautiful” both express feelings",
   "why": "You treat moral and aesthetic talk the same way: neither describes a fact, both voice an attitude, like “Boo!” or “Wow!”. A. J. Ayer held exactly this pair, and the consistency is a strength: your view of value doesn’t need different stories for different values.",
   "who": [
    "ayer"
   ]
  },
  {
   "a": [
    "e4j",
    [
     "sentiment"
    ]
   ],
   "b": [
    "a1a",
    [
     "better"
    ]
   ],
   "name": "Humean sentimentalist",
   "title": "Virtue and beauty both rest on refined feeling",
   "why": "Hume thought we spot virtue the same way we spot beauty: by a feeling of approval that can be trained, corrected and shared. That is why he could say some tastes and some moral judgments are better without making either a cold matter of fact.",
   "who": [
    "hume"
   ]
  },
  {
   "a": [
    "e5f",
    [
     "kantian"
    ]
   ],
   "b": [
    "a1a",
    [
     "kant"
    ]
   ],
   "name": "Kantian",
   "title": "Moral and aesthetic claims both speak for everyone",
   "why": "For Kant, neither moral law nor beauty is a fact “out there”, yet both claim everyone’s agreement: reason binds all rational people, and a judgment of beauty expects all to share it. Your answers keep that same middle path in two places.",
   "who": [
    "kant"
   ]
  },
  {
   "a": [
    "a3",
    [
     "moralism"
    ]
   ],
   "b": [
    "s4",
    [
     "order"
    ]
   ],
   "name": "Platonic",
   "title": "Corrupting art is bad art, and the state may curb it",
   "why": "If art’s purpose is moral and corrupting art is bad, then a state protecting public order has a reason to care about it. Plato drew exactly this conclusion in the Republic, banning poets who showed the gods behaving badly.",
   "who": [
    "plato"
   ]
  },
  {
   "a": [
    "k2",
    [
     "yes"
    ]
   ],
   "b": [
    "e5b",
    [
     "nonnatural"
    ]
   ],
   "name": "Non-naturalist realist",
   "title": "Numbers are real, and so are non-physical moral facts",
   "why": "If 2 + 2 = 4 is true without being made of anything physical, then a moral fact being non-physical is no special mystery. Derek Parfit pressed exactly this comparison: moral truths are like logical and mathematical ones.",
   "who": [
    "parfit"
   ]
  },
  {
   "a": [
    "k3",
    [
     "empiric"
    ]
   ],
   "b": [
    "e5",
    [
     "no"
    ]
   ],
   "name": "Empiricist",
   "title": "All knowledge from experience, and no moral facts",
   "why": "If every fact about the world must come through the senses, moral facts look suspicious: no one sees or measures wrongness. A. J. Ayer and Rudolf Carnap drew this lesson, treating moral talk as something other than describing.",
   "who": [
    "ayer",
    "carnap"
   ]
  },
  {
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "k9",
    [
     "nomeaning"
    ]
   ],
   "name": "Logical positivist",
   "title": "No test, no meaning: for dreams and for God",
   "why": "You apply one rule twice: a claim that no experience could ever check says nothing real. The logical positivists, A. J. Ayer and Rudolf Carnap, used exactly this rule on skeptical doubts and on talk of God.",
   "who": [
    "ayer",
    "carnap"
   ]
  },
  {
   "a": [
    "k13",
    [
     "pragma"
    ]
   ],
   "b": [
    "k9i",
    [
     "will"
    ]
   ],
   "name": "Pragmatist",
   "title": "Truth is what works, so hope may decide",
   "why": "If true beliefs are the ones that work out in living, then when evidence can’t decide a question that matters, letting your hopes and needs settle it is reasonable. William James held both in “The Will to Believe.”",
   "who": [
    "james"
   ]
  },
  {
   "a": [
    "k9d",
    [
     "basic"
    ]
   ],
   "b": [
    "k4a",
    [
     "fallib",
     "common"
    ]
   ],
   "name": "Reformed epistemologist",
   "title": "No proof needed for hands, or for God",
   "why": "You don’t demand proof that the outside world exists; you think trusting your senses is reasonable anyway. Alvin Plantinga, building on Thomas Reid’s common sense, argued belief in God can be justified in the same way.",
   "who": [
    "plantinga",
    "alston"
   ]
  },
  {
   "a": [
    "k9a",
    [
     "pantheism"
    ]
   ],
   "b": [
    "k12",
    [
     "monism"
    ]
   ],
   "name": "Spinozist",
   "title": "God is nature, and nature is one",
   "why": "If God is everything there is, and everything is ultimately one thing, these are the same claim seen from two sides. Spinoza held that there is only one substance, which he called “God, or Nature.”",
   "who": [
    "spinoza"
   ]
  },
  {
   "a": [
    "k9f",
    [
     "dao"
    ]
   ],
   "b": [
    "l2b",
    [
     "natural"
    ]
   ],
   "name": "Daoist",
   "title": "The Way runs through all things, death included",
   "why": "If all things follow a natural pattern with no plan behind it, then death is just one more turn of that pattern, like the seasons. Zhuangzi sang at his wife’s funeral for exactly this reason.",
   "who": [
    "zhuangzi"
   ]
  },
  {
   "a": [
    "k9j",
    [
     "practice"
    ]
   ],
   "b": [
    "k9l",
    [
     "feeling"
    ]
   ],
   "name": "",
   "title": "Religion as a way of living, not a theory",
   "why": "You see religious experience as real and valuable feeling, and religions as ways of life rather than rival theories. These fit together: if religion isn’t trying to describe the world, its experiences needn’t be glimpses of anything. George Santayana and Wittgenstein both saw religion this way.",
   "who": [
    "santayana",
    "wittgenstein"
   ]
  },
  {
   "a": [
    "e4",
    [
     "exist"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "name": "Atheist existentialist",
   "title": "No God, so we make our own values",
   "why": "Sartre put it simply: if there is no God, there is no human nature or moral law handed down in advance, so we are left to choose what to stand for. Your atheism removes the giver of values, and your ethics accepts the job.",
   "who": [
    "sartre",
    "beauvoir"
   ]
  },
  {
   "a": [
    "e4",
    [
     "exist"
    ]
   ],
   "b": [
    "m3",
    [
     "libert"
    ]
   ],
   "name": "Sartrean",
   "title": "You choose your values, and the choice is open",
   "why": "Existentialist ethics puts all the weight on choosing, and that needs a choice not settled in advance. Sartre held that we are “condemned to be free”: nothing, not even our past, fixes what we will do next.",
   "who": [
    "sartre",
    "beauvoir"
   ]
  },
  {
   "a": [
    "l1c",
    [
     "revolt"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "name": "Absurdist",
   "title": "No God, no cosmic meaning, and live fully anyway",
   "why": "Camus started from a universe that answers none of our questions and asked how to live without false hope. Your two answers are the starting point and the response: no one up there, and Sisyphus pushing his rock anyway.",
   "who": [
    "camus"
   ]
  },
  {
   "a": [
    "e4",
    [
     "virtue"
    ]
   ],
   "b": [
    "l1a",
    [
     "worth"
    ]
   ],
   "name": "Aristotelian",
   "title": "Character matters most, and meaning comes from real worth",
   "why": "Virtue ethics says a good life is one lived well, not one that merely feels good, and your view of meaning says the same: what makes a life matter is doing what’s truly worthwhile. Aristotle tied both to one idea of human flourishing.",
   "who": [
    "aristotle"
   ]
  },
  {
   "a": [
    "e4m",
    [
     "stoic"
    ]
   ],
   "b": [
    "l6",
    [
     "remember"
    ]
   ],
   "name": "Stoic package",
   "title": "Virtue is all you need, and death is daily practice",
   "why": "If nothing outside your character can harm what matters, death is no harm to it either, so you can look at it every day without fear. Seneca, Epictetus and Marcus Aurelius all made remembering death part of training in virtue.",
   "who": [
    "seneca",
    "epictetus",
    "marcus_aurelius"
   ]
  },
  {
   "a": [
    "e4d",
    [
     "pleasure"
    ]
   ],
   "b": [
    "l2b",
    [
     "epicur"
    ]
   ],
   "name": "Epicurean",
   "title": "Calm pleasure is the good, and death is nothing",
   "why": "If the only good and bad are pleasure and pain, then death, which no one feels, can’t be bad for you. Epicurus taught this pair together so that fear of death would not spoil a peaceful life.",
   "who": [
    "epicurus"
   ]
  },
  {
   "a": [
    "e4c",
    [
     "hedon"
    ]
   ],
   "b": [
    "l3",
    [
     "same"
    ]
   ],
   "name": "Consistent hedonist",
   "title": "Plug into the machine, and the deceived man lost nothing",
   "why": "You give the same answer to both experience tests: if it feels just as good, it is just as good. Many people say yes to one and no to the other; you have held the line as Bentham and Sidgwick would.",
   "who": [
    "bentham",
    "sidgwick"
   ]
  },
  {
   "a": [
    "s13",
    [
     "perfect"
    ]
   ],
   "b": [
    "l1a",
    [
     "worth",
     "hybrid"
    ]
   ],
   "name": "Perfectionist",
   "title": "Lives can really be better, and the state may help",
   "why": "You hold that meaning depends on doing what is truly worthwhile, and that the state may encourage what makes lives go well. Both rest on the idea that some ways of living really are better. Aristotle and Joseph Raz connect the two.",
   "who": [
    "aristotle",
    "raz"
   ]
  },
  {
   "a": [
    "e4a",
    [
     "everyone"
    ]
   ],
   "b": [
    "e3",
    [
     "equal"
    ]
   ],
   "name": "Utilitarian",
   "title": "Everyone counts equally, pigs included",
   "why": "If results for everyone matter equally, the line doesn’t stop at our species: pain is pain. Bentham asked “Can they suffer?” for exactly this reason, and Peter Singer built the animal liberation movement on it.",
   "who": [
    "bentham",
    "singer",
    "rachels"
   ]
  },
  {
   "a": [
    "e6",
    [
     "strict"
    ]
   ],
   "b": [
    "s12",
    [
     "cosmo"
    ]
   ],
   "name": "Effective altruist",
   "title": "Distance doesn’t change your duty, or your government’s",
   "why": "You say a stranger far away has as strong a claim on you as one nearby, and that the same holds for nations. Peter Singer’s drowning child argument leads straight to both.",
   "who": [
    "singer",
    "godwin"
   ]
  },
  {
   "a": [
    "e4e",
    [
     "deont"
    ]
   ],
   "b": [
    "s1",
    [
     "retrib"
    ]
   ],
   "name": "Kantian",
   "title": "Some acts are simply wrong, so wrongdoers deserve punishment",
   "why": "If rightness is about what is done, not what results, punishment should also look back at the deed itself. Kant held that punishing only to deter uses a person as a tool; punishment must be deserved.",
   "who": [
    "kant",
    "michael_moore"
   ]
  },
  {
   "a": [
    "e4k",
    [
     "means"
    ]
   ],
   "b": [
    "s8",
    [
     "no"
    ]
   ],
   "name": "Libertarian",
   "title": "People aren’t tools, and neither are their earnings",
   "why": "Robert Nozick argued that taxing honest earnings to help others treats people as resources for someone else’s goals. Your ban on using people as tools and your view that fair steps make fair results come from the same idea of persons as owners of themselves.",
   "who": [
    "nozick"
   ]
  },
  {
   "a": [
    "e4g",
    [
     "fair"
    ]
   ],
   "b": [
    "s8a",
    [
     "diff"
    ]
   ],
   "name": "Rawlsian",
   "title": "Rules fair to everyone, so gaps must help the worst-off",
   "why": "Ask what rules people could agree to as equals, not knowing whether they’ll be born rich or poor, and you get John Rawls’s answer: inequality is fair only when it helps the worst-off. Your ethics and your politics are his.",
   "who": [
    "rawls"
   ]
  },
  {
   "a": [
    "e4g",
    [
     "mutual"
    ]
   ],
   "b": [
    "s7a",
    [
     "consent"
    ]
   ],
   "name": "Hobbesian",
   "title": "Morality is a deal, and so is the state",
   "why": "If moral rules are a bargain for mutual benefit, the law’s authority is naturally the same kind of bargain. Thomas Hobbes built both on one idea: we accept rules because life without them is “nasty, brutish and short.”",
   "who": [
    "hobbes"
   ]
  },
  {
   "a": [
    "s10",
    [
     "neg"
    ]
   ],
   "b": [
    "s8b",
    [
     "floor"
    ]
   ],
   "name": "Classical liberal",
   "title": "Freedom means no interference, with a safety net",
   "why": "Freedom as nobody stopping you sits well with keeping what you honestly earn, while a minimum for all stops poverty becoming desperation. Friedrich Hayek defended exactly this mix.",
   "who": [
    "hayek"
   ]
  },
  {
   "a": [
    "s10",
    [
     "means"
    ]
   ],
   "b": [
    "s8a",
    [
     "diff",
     "luck",
     "enough",
     "prior"
    ]
   ],
   "name": "Social democrat",
   "title": "Freedom needs real options, so redistribution serves freedom",
   "why": "If a poor person is truly unfree to do what they can’t afford, sharing resources more fairly isn’t a trade-off against freedom; it extends it. Martha Nussbaum and G. A. Cohen both argue this.",
   "who": [
    "nussbaum",
    "ga_cohen"
   ]
  },
  {
   "a": [
    "s5",
    [
     "never"
    ]
   ],
   "b": [
    "s4",
    [
     "harm"
    ]
   ],
   "name": "Millian liberal",
   "title": "Your life is yours, and speech is free unless harmful",
   "why": "Both answers come from one rule: the state may restrict you only to prevent harm to others. John Stuart Mill called this the harm principle in On Liberty, and applied it to both speech and personal choices.",
   "who": [
    "mill",
    "constant"
   ]
  },
  {
   "a": [
    "s7b",
    [
     "coop"
    ]
   ],
   "b": [
    "s1",
    [
     "abolish"
    ]
   ],
   "name": "Social anarchist",
   "title": "No state, and no punishment, only cooperation",
   "why": "If communities can run themselves by mutual aid, they can also answer wrongdoing by repair rather than state punishment. Peter Kropotkin and Leo Tolstoy rejected both the state and its prisons.",
   "who": [
    "kropotkin",
    "tolstoy"
   ]
  },
  {
   "a": [
    "s6",
    [
     "piecemeal"
    ]
   ],
   "b": [
    "k4a",
    [
     "fallib"
    ]
   ],
   "name": "Popperian",
   "title": "Knowledge without proof, so reform step by step",
   "why": "If you can know things without certainty, you can also be wrong without knowing it, which is a good reason to change society in small tested steps. Karl Popper drew his politics straight from his view of knowledge.",
   "who": [
    "popper"
   ]
  },
  {
   "a": [
    "s6",
    [
     "radical"
    ]
   ],
   "b": [
    "k9b",
    [
     "debunk"
    ]
   ],
   "name": "Marxist",
   "title": "Religion explained away, and society remade",
   "why": "Marx saw religion as a product of social conditions, “the opium of the people”, and thought the cure was to change those conditions at the roots. Your atheism and your politics share his diagnosis.",
   "who": [
    "marx"
   ]
  },
  {
   "a": [
    "s13",
    [
     "neutral"
    ]
   ],
   "b": [
    "k9j",
    [
     "suspend"
    ]
   ],
   "name": "Political liberal",
   "title": "No one can settle religion, so law shouldn’t take sides",
   "why": "If sincere, informed people will always disagree about religion, laws should rest on reasons everyone can accept. John Rawls built his political liberalism on this fact of reasonable disagreement.",
   "who": [
    "rawls"
   ]
  },
  {
   "a": [
    "a6",
    [
     "unique"
    ]
   ],
   "b": [
    "l8",
    [
     "pessim",
     "harm"
    ]
   ],
   "name": "Schopenhauerian",
   "title": "Life is mostly striving, and art brings relief",
   "why": "Schopenhauer thought life is endless wanting and suffering, and that the rare escape is art, where we lose ourselves in will-less contemplation. Your pessimism explains why that state of mind would be so precious.",
   "who": [
    "schopenhauer"
   ]
  },
  {
   "a": [
    "a4",
    [
     "open"
    ]
   ],
   "b": [
    "k4a",
    [
     "hinge"
    ]
   ],
   "name": "Wittgensteinian",
   "title": "Art has no definition, and doubt has no foundation",
   "why": "Both answers come from Wittgenstein. Words like “game” work by family resemblance, not fixed definitions (Morris Weitz applied this to art), and our knowing rests on certainties that were never proved. In both cases he asks you to look at how we actually live rather than for hidden foundations.",
   "who": [
    "wittgenstein",
    "weitz"
   ]
  },
  {
   "a": [
    "a9",
    [
     "no"
    ]
   ],
   "b": [
    "m6",
    [
     "split",
     "stuff",
     "never",
     "unknown"
    ]
   ],
   "name": "",
   "title": "Machines don’t feel, so AI images aren’t art",
   "why": "You think art needs a maker who means or feels something, and you doubt a machine could ever be shown to feel. Put together, an AI image is a striking object but not a work of art. The writer Ted Chiang argues that AI output lacks the intention to communicate that art needs.",
   "who": [
    "chiang"
   ]
  },
  {
   "a": [
    "l2a",
    [
     "depriv",
     "both"
    ]
   ],
   "b": [
    "l7",
    [
     "yes"
    ]
   ],
   "name": "Deprivationist",
   "title": "Death takes good years, so more years are welcome",
   "why": "If death is bad because it robs you of good life you would have had, then an endless supply of good life is a gift, not a burden. Thomas Nagel and John Martin Fischer both argue this against Bernard Williams’s worry about boredom.",
   "who": [
    "nagel",
    "fischer"
   ]
  },
  {
   "a": [
    "l6",
    [
     "own"
    ]
   ],
   "b": [
    "l7",
    [
     "precious",
     "bored"
    ]
   ],
   "name": "",
   "title": "Face your death, because an end gives life shape",
   "why": "You decline immortality because an endless life would lose its urgency or point, and you think facing death is what makes a life your own. Heidegger called this being-toward-death: finitude is what gives our choices their weight.",
   "who": [
    "heidegger"
   ]
  },
  {
   "a": [
    "e4h",
    [
     "right"
    ]
   ],
   "b": [
    "k9i",
    [
     "above"
    ]
   ],
   "name": "Natural law",
   "title": "God commands what is right, and reason can see it",
   "why": "If God commands things because they are right, then reason can grasp much of morality on its own, with faith adding what reason can’t reach. Thomas Aquinas and Maimonides both held this harmony of faith and reason.",
   "who": [
    "aquinas",
    "maimonides"
   ]
  },
  {
   "a": [
    "e5e",
    [
     "quasi"
    ]
   ],
   "b": [
    "k13",
    [
     "deflate"
    ]
   ],
   "name": "Quasi-realist",
   "title": "Morals are attitudes, and “true” is a light word",
   "why": "If calling something “true” just means agreeing with it, you can say “cruelty is wrong” is true without believing in moral facts out in the world. Simon Blackburn built his quasi-realism on exactly this pairing.",
   "who": [
    "blackburn"
   ]
  },
  {
   "a": [
    "e4a",
    [
     "everyone"
    ]
   ],
   "b": [
    "s8a",
    [
     "welfare"
    ]
   ],
   "name": "Utilitarian",
   "title": "Everyone counts equally, so justice means the best total",
   "why": "If a stranger’s good counts exactly as much as yours, the just distribution is simply the one that makes lives go best overall. Bentham and Mozi both judged social arrangements by the total good they produce.",
   "who": [
    "bentham",
    "mozi",
    "godwin"
   ]
  },
  {
   "a": [
    "e4b",
    [
     "twolevel"
    ]
   ],
   "b": [
    "s7a",
    [
     "useful"
    ]
   ],
   "name": "",
   "title": "Rules as shortcuts, so the law deserves respect",
   "why": "Two-level utilitarians think trusted rules usually serve the good better than case-by-case calculation. Law is the public version of such a rule, so treating it as binding even at an empty crossing is what the theory recommends. Bentham and Hume both grounded obedience in usefulness.",
   "who": [
    "hare",
    "bentham"
   ]
  },
  {
   "a": [
    "e4b",
    [
     "rule"
    ]
   ],
   "b": [
    "s1",
    [
     "mixed"
    ]
   ],
   "name": "Rule utilitarian",
   "title": "Rules decide, so punish to prevent but never beyond desert",
   "why": "A rule utilitarian asks which practice of punishment would be best if everyone accepted it. A practice that framed the innocent or punished beyond desert would wreck trust, so the best rules aim at prevention within the limits of guilt. Rawls’s “Two Concepts of Rules” made this argument.",
   "who": []
  },
  {
   "a": [
    "e4a",
    [
     "everyone"
    ]
   ],
   "b": [
    "s1",
    [
     "forward"
    ]
   ],
   "name": "Benthamite",
   "title": "Everyone’s suffering counts, criminals’ too, so punish only to prevent",
   "why": "Punishment is itself a harm, and if every person’s pain counts equally it can be justified only by the greater harm it prevents. Bentham built his whole theory of punishment on this, and Smart and Mill followed.",
   "who": [
    "bentham",
    "smart"
   ]
  },
  {
   "a": [
    "e4b",
    [
     "twolevel"
    ]
   ],
   "b": [
    "s4",
    [
     "harm"
    ]
   ],
   "name": "Millian",
   "title": "Rules as shortcuts, and free speech is the best rule",
   "why": "Mill argued that silencing an opinion is a bad policy even when the censor feels sure: the opinion may be true, or partly true, and even a false one keeps the truth alive. A firm rule of free speech, limited by harm, is the kind of trusted rule a two-level utilitarian lives by.",
   "who": [
    "mill"
   ]
  },
  {
   "a": [
    "e4a",
    [
     "everyone"
    ]
   ],
   "b": [
    "s3",
    [
     "protect"
    ]
   ],
   "name": "",
   "title": "Everyone counts, and no ruler can be trusted to agree",
   "why": "Bentham and James Mill argued that any ruling group will pursue its own interest unless the governed can remove it. If everyone’s good counts, democracy is the device that forces rulers to count it too.",
   "who": [
    "bentham",
    "mill"
   ]
  },
  {
   "a": [
    "e6",
    [
     "scalar"
    ]
   ],
   "b": [
    "e4a",
    [
     "everyone"
    ]
   ],
   "name": "Scalar utilitarian",
   "title": "Better and worse results, with no line called “required”",
   "why": "If all that matters is everyone’s good, then acts are simply better or worse depending on how much good they do. Norcross argued that a utilitarian should drop “required” altogether and speak only of better and worse.",
   "who": [
    "norcross"
   ]
  },
  {
   "a": [
    "e6",
    [
     "strict"
    ]
   ],
   "b": [
    "e4r",
    [
     "none"
    ]
   ],
   "name": "",
   "title": "No line you won’t cross, and no room for yourself",
   "why": "If the best result is always right, there are no special constraints protecting victims and no special permission to favour your own projects, so you must keep giving. Kagan’s “The Limits of Morality” defended both halves together.",
   "who": [
    "kagan"
   ]
  },
  {
   "a": [
    "e4e",
    [
     "deont"
    ]
   ],
   "b": [
    "s5",
    [
     "never"
    ]
   ],
   "name": "",
   "title": "Duties from reason, so no one runs your life",
   "why": "If what makes acts right is respecting people as reasoning agents, the state wrongs you when it overrides your choices about your own life. Kant called paternalistic government the greatest despotism imaginable, and Nozick followed him.",
   "who": [
    "kant",
    "nozick"
   ]
  },
  {
   "a": [
    "e4l",
    [
     "victim"
    ]
   ],
   "b": [
    "s8b",
    [
     "no"
    ]
   ],
   "name": "Libertarian",
   "title": "Rights can’t be traded off, nor can earnings",
   "why": "If a person’s rights are side constraints that others’ needs cannot cancel, then taking someone’s honestly earned money to help another, however needy, crosses one. Nozick drew this line from the trolley case to the tax code.",
   "who": [
    "nozick"
   ]
  },
  {
   "a": [
    "e4k",
    [
     "means"
    ]
   ],
   "b": [
    "s1",
    [
     "mixed"
    ]
   ],
   "name": "",
   "title": "People aren’t tools, so punish no more than deserved",
   "why": "Punishing only to deter turns the criminal into an example for others. Requiring that punishment go no further than the person deserves keeps him from being used merely as a means, while still letting it serve a protective purpose. Hart’s mixed theory has this shape.",
   "who": [
    "hart"
   ]
  },
  {
   "a": [
    "e4e",
    [
     "deont"
    ]
   ],
   "b": [
    "s7a",
    [
     "justice"
    ]
   ],
   "name": "Kantian",
   "title": "Reason sets duties, including supporting just law",
   "why": "Kant held that rational people have a duty to leave the lawless state of nature and support a just civil order, whether or not they ever agreed to it. The duty to obey comes from reason itself, not from consent or benefit.",
   "who": [
    "kant"
   ]
  },
  {
   "a": [
    "e5f",
    [
     "kantian"
    ]
   ],
   "b": [
    "e4e",
    [
     "deont"
    ]
   ],
   "name": "Kantian constructivist",
   "title": "Reasoning binds everyone, and duties come from reason",
   "why": "If moral truths are what any clear-thinking agent is committed to, then duties really do come from reason itself, and they bind even someone who doesn’t care. Kant and Korsgaard hold both.",
   "who": [
    "kant",
    "korsgaard"
   ]
  },
  {
   "a": [
    "e6",
    [
     "imperfect"
    ]
   ],
   "b": [
    "e4e",
    [
     "deont"
    ]
   ],
   "name": "Kantian",
   "title": "Reason requires helping, but leaves how much to you",
   "why": "Kant split duties into perfect ones, like not lying, which leave no room, and imperfect ones, like helping others, which you must adopt as a goal but may fulfil in your own way. Beneficence is his standard example of an imperfect duty.",
   "who": [
    "kant"
   ]
  },
  {
   "a": [
    "e3",
    [
     "none"
    ]
   ],
   "b": [
    "e4e",
    [
     "deont"
    ]
   ],
   "name": "Kantian",
   "title": "Duties come from reason, and only reasoners are owed them",
   "why": "If duty comes from reason, then direct duties are owed to beings who reason. Kant held that cruelty to animals is wrong only because it hardens us toward people, which is word for word the indirect view.",
   "who": [
    "kant",
    "aquinas"
   ]
  },
  {
   "a": [
    "e1",
    [
     "wrong"
    ]
   ],
   "b": [
    "e4k",
    [
     "doing"
    ]
   ],
   "name": "",
   "title": "Doing beats allowing, so don’t even pull",
   "why": "Pulling the lever is doing harm to the one, while not pulling only allows harm to the five. If that difference matters most, even the lever is off-limits. Thomson came to this view in her later work.",
   "who": [
    "thomson"
   ]
  },
  {
   "a": [
    "e2a",
    [
     "means"
    ]
   ],
   "b": [
    "e4l",
    [
     "victim"
    ]
   ],
   "name": "",
   "title": "He’d be used as a tool, and victims have rights",
   "why": "What makes the push different is that the man’s body becomes your tool, and his right not to be used that way doesn’t give way to others’ need. Kamm and Quinn built theories of rights on exactly this contrast.",
   "who": [
    "kamm",
    "quinn_warren"
   ]
  },
  {
   "a": [
    "e4g",
    [
     "fair"
    ]
   ],
   "b": [
    "s3",
    [
     "intrinsic"
    ]
   ],
   "name": "Rawlsian",
   "title": "Rules fair to all, so everyone gets an equal say",
   "why": "If the right rules are those that treat each person as an equal, then the rules for making rules must too. Rawls put equal political liberty among the basic liberties no fair contract could trade away.",
   "who": [
    "rawls"
   ]
  },
  {
   "a": [
    "e5",
    [
     "construct"
    ]
   ],
   "b": [
    "e4g",
    [
     "fair"
    ]
   ],
   "name": "Rawlsian",
   "title": "Moral truths are constructed, from what’s fair to all",
   "why": "Constructivists say right principles are what a fair procedure of reasoning would produce. Rawls and Scanlon both pair this with the idea that the right rules are those every person, treated as an equal, could accept.",
   "who": [
    "rawls",
    "scanlon"
   ]
  },
  {
   "a": [
    "e4u",
    [
     "equilibrium"
    ]
   ],
   "b": [
    "s8a",
    [
     "diff"
    ]
   ],
   "name": "Rawlsian",
   "title": "Test principles against cases, and gaps must help the worst-off",
   "why": "Rawls invented “reflective equilibrium”, adjusting principles and judgements until they fit, and used it to defend his difference principle. The method and the principle came together in “A Theory of Justice”.",
   "who": [
    "rawls"
   ]
  },
  {
   "a": [
    "e4s",
    [
     "indirect"
    ]
   ],
   "b": [
    "e3",
    [
     "none"
    ]
   ],
   "name": "Contractarian",
   "title": "Only reasoners make the deal, so animals count only indirectly",
   "why": "If morality is an agreement among those who can reason, animals aren’t parties to it, and are protected only because people care about them. Carruthers defended this view of animals on contractualist grounds.",
   "who": [
    "carruthers"
   ]
  },
  {
   "a": [
    "e4g",
    [
     "mutual"
    ]
   ],
   "b": [
    "s3b",
    [
     "perform"
    ]
   ],
   "name": "Hobbesian",
   "title": "Morality is a deal, and whoever keeps the peace governs",
   "why": "If people accept rules because peace pays each of them, what matters about a ruler is that he delivers that peace, not how he came to power. Hobbes held that any sovereign who protects his subjects has their obedience.",
   "who": [
    "hobbes"
   ]
  },
  {
   "a": [
    "e5a",
    [
     "relativism"
    ]
   ],
   "b": [
    "e4g",
    [
     "mutual"
    ]
   ],
   "name": "",
   "title": "Morality is local, a bargain struck by those it binds",
   "why": "If moral rules come from bargains people make for mutual benefit, different groups strike different bargains, so moral truths are relative to the group. Harman defended relativism on exactly these grounds.",
   "who": [
    "harman"
   ]
  },
  {
   "a": [
    "e4j",
    [
     "eudaim"
    ]
   ],
   "b": [
    "s13",
    [
     "perfect"
    ]
   ],
   "name": "Aristotelian",
   "title": "Virtue is living well, and politics should help",
   "why": "If virtues are what make a human life flourish, then a community that cares about its members will try to make them good. Aristotle said the city exists not just for life but for the good life.",
   "who": [
    "aristotle"
   ]
  },
  {
   "a": [
    "e4m",
    [
     "aristotle"
    ]
   ],
   "b": [
    "s8a",
    [
     "enough"
    ]
   ],
   "name": "Capabilities",
   "title": "A good life needs some luck, so everyone needs enough",
   "why": "If even a virtuous person needs health, friends and resources to live well, justice should make sure everyone has enough of them. Nussbaum built her capabilities approach on this Aristotelian point.",
   "who": [
    "nussbaum"
   ]
  },
  {
   "a": [
    "e4o",
    [
     "ritual"
    ]
   ],
   "b": [
    "s6",
    [
     "restore"
    ]
   ],
   "name": "Confucian",
   "title": "Trained ways shape judgement, so recover the old rites",
   "why": "If good judgement is formed by rituals and examples, then losing them damages people’s characters, and the cure is to restore them. Confucius described himself as a transmitter of the ways of the early Zhou, not an inventor.",
   "who": [
    "confucius"
   ]
  },
  {
   "a": [
    "e4j",
    [
     "role"
    ]
   ],
   "b": [
    "s7a",
    [
     "member"
    ]
   ],
   "name": "Confucian",
   "title": "Virtue fits your roles, including citizen of your community",
   "why": "If virtues are fitting your roles, a son owes his parents what he never chose, and a subject owes his community the same. Confucian thought models political duty on family duty.",
   "who": [
    "confucius"
   ]
  },
  {
   "a": [
    "e4m",
    [
     "stoic"
    ]
   ],
   "b": [
    "s10",
    [
     "self"
    ]
   ],
   "name": "Stoic",
   "title": "Virtue is all you need, and freedom is self-mastery",
   "why": "If nothing outside your character can harm what matters, then a slave who governs his own judgements is freer than an emperor ruled by his appetites. Epictetus, himself born a slave, taught exactly this.",
   "who": [
    "epictetus"
   ]
  },
  {
   "a": [
    "e4w",
    [
     "institutions"
    ]
   ],
   "b": [
    "s8a",
    [
     "enough"
    ]
   ],
   "name": "Political care ethics",
   "title": "Care reaches strangers through institutions, so everyone gets enough",
   "why": "If caring for distant people works through fair laws and aid, its natural aim is that everyone’s needs are met. Held and Tronto argue that a caring society guarantees the care and resources everyone needs.",
   "who": [
    "held",
    "tronto"
   ]
  },
  {
   "a": [
    "e1a",
    [
     "protect"
    ]
   ],
   "b": [
    "e4",
    [
     "care"
    ]
   ],
   "name": "Care ethicist",
   "title": "Care for your people comes first, so protect your child",
   "why": "If morality starts from the real relationships in your life, sacrificing your own child to save strangers would betray the very thing that makes acts right. Care ethics treats this as a central case, not an exception.",
   "who": []
  },
  {
   "a": [
    "e4h",
    [
     "right"
    ]
   ],
   "b": [
    "s13",
    [
     "perfect",
     "relig"
    ]
   ],
   "name": "Natural law",
   "title": "God commands what’s right, and law serves the good",
   "why": "If God commands things because they are good, reason can see what is good too, and human law should direct people toward it. Aquinas held that law aims at the common good and at making citizens virtuous, within an order God made.",
   "who": [
    "aquinas"
   ]
  },
  {
   "a": [
    "e5b",
    [
     "theistic"
    ]
   ],
   "b": [
    "e4h",
    [
     "nature"
    ]
   ],
   "name": "Theistic realist",
   "title": "Moral facts are about God, whose nature grounds his commands",
   "why": "If moral facts are grounded in God’s nature, then God’s commands flow from that good nature, so they are neither arbitrary nor answerable to something above God. Robert Adams defends both claims together.",
   "who": [
    "adams_rm"
   ]
  },
  {
   "a": [
    "e4d",
    [
     "flourish"
    ]
   ],
   "b": [
    "s8b",
    [
     "no"
    ]
   ],
   "name": "Objectivist",
   "title": "Live by your own lights, and keep what you earn",
   "why": "If your good is to live by your own judgement and achievements, then taxing your earnings to support others forces you to live for them. Ayn Rand joined rational egoism to laissez-faire capitalism for this reason.",
   "who": [
    "rand"
   ]
  },
  {
   "a": [
    "e4d",
    [
     "desire"
    ]
   ],
   "b": [
    "s7b",
    [
     "indiv"
    ]
   ],
   "name": "Egoist anarchist",
   "title": "Your good is what you want, and no rulers",
   "why": "If what is good for you is simply what you want, then the state is just another power claiming you, with no right to your obedience. Max Stirner rejected the state and imagined a “union of egoists” joined and left at will.",
   "who": [
    "stirner"
   ]
  },
  {
   "a": [
    "e4v",
    [
     "situated"
    ]
   ],
   "b": [
    "s10",
    [
     "means"
    ]
   ],
   "name": "",
   "title": "Real pressures limit freedom, so freedom needs real options",
   "why": "If oppression and poverty can genuinely narrow what someone is free to do, then freedom is more than no one stopping you: it needs actual options. Beauvoir stressed that some people’s situations deny them the freedom others enjoy.",
   "who": [
    "beauvoir"
   ]
  },
  {
   "a": [
    "e4q",
    [
     "beauvoir"
    ]
   ],
   "b": [
    "s6",
    [
     "radical"
    ]
   ],
   "name": "",
   "title": "Wanting freedom for all means changing what oppresses",
   "why": "If willing your own freedom means willing other people’s, a system that keeps groups unfree has to be changed, not patched. Beauvoir and Sartre both moved from existentialism to radical political engagement.",
   "who": [
    "sartre"
   ]
  },
  {
   "a": [
    "e4q",
    [
     "nietzsche"
    ]
   ],
   "b": [
    "s3",
    [
     "no"
    ]
   ],
   "name": "Nietzschean",
   "title": "Some values are higher, so votes needn’t be equal",
   "why": "If some values and some people are higher than others, giving everyone an equal say has no special authority. Nietzsche attacked democracy as the triumph of the herd over excellence.",
   "who": [
    "nietzsche"
   ]
  },
  {
   "a": [
    "e4p",
    [
     "ross"
    ]
   ],
   "b": [
    "s10",
    [
     "neg"
    ]
   ],
   "name": "Value pluralist",
   "title": "Values clash with no ranking, so freedom is just freedom",
   "why": "If real values conflict and none always wins, it is safer to keep freedom distinct from other goods like wealth or virtue, so their trade-offs stay visible. Isaiah Berlin joined value pluralism to negative liberty for this reason.",
   "who": [
    "berlin"
   ]
  },
  {
   "a": [
    "e5b",
    [
     "nonnatural"
    ]
   ],
   "b": [
    "e4u",
    [
     "intuition"
    ]
   ],
   "name": "Intuitionist",
   "title": "Moral facts are non-physical, and known by intuition",
   "why": "If moral facts are not things science can measure, we cannot learn them by observation, so careful intuition is the natural way to know them. W. D. Ross held both, as did Moore.",
   "who": [
    "ross"
   ]
  },
  {
   "a": [
    "e5b",
    [
     "natural"
    ]
   ],
   "b": [
    "e4j",
    [
     "eudaim"
    ]
   ],
   "name": "Neo-Aristotelian",
   "title": "Moral facts are natural, and virtue is flourishing",
   "why": "If moral goodness is like health, a fact about what helps a living thing thrive, then virtues are the traits that make a human life flourish. Philippa Foot’s “Natural Goodness” argues exactly this.",
   "who": [
    "foot"
   ]
  },
  {
   "a": [
    "e5e",
    [
     "quasi"
    ]
   ],
   "b": [
    "e4b",
    [
     "twolevel"
    ]
   ],
   "name": "Prescriptivist utilitarian",
   "title": "Moral talk is attitude, and its logic is utilitarian",
   "why": "Hare argued that moral words express universal prescriptions, not facts, and that taking that logic seriously leads to utilitarianism with everyday rules for practice and calculation for reflection.",
   "who": [
    "hare"
   ]
  },
  {
   "a": [
    "e1a",
    [
     "may"
    ]
   ],
   "b": [
    "e4r",
    [
     "prereq"
    ]
   ],
   "name": "",
   "title": "You may save your child, because some room is yours",
   "why": "If you may sometimes put your own life and projects ahead of the best overall result, saving your child instead of the five is a clear case of that permission. Scheffler defended this kind of “agent-centred prerogative”.",
   "who": [
    "scheffler"
   ]
  },
  {
   "a": [
    "e4d",
    [
     "pleasure"
    ]
   ],
   "b": [
    "l6",
    [
     "calm"
    ]
   ],
   "name": "Epicurean",
   "title": "Calm pleasure is the good, so stop fearing death",
   "why": "If the good life is calm pleasure and freedom from pain, fear of death is one of the biggest pains to remove, and understanding death removes it. Epicurus made this the point of his philosophy.",
   "who": [
    "epicurus",
    "lucretius"
   ]
  },
  {
   "a": [
    "e4q",
    [
     "authentic"
    ]
   ],
   "b": [
    "l1a",
    [
     "subjective"
    ]
   ],
   "name": "Sartrean",
   "title": "Own your choices, and your life means what you choose",
   "why": "If no values are handed to us and what counts is choosing freely, then a life’s meaning can only come from the commitments you make. Sartre said existence comes before essence: we make ourselves.",
   "who": [
    "sartre"
   ]
  },
  {
   "a": [
    "e4m",
    [
     "aristotle"
    ]
   ],
   "b": [
    "l3",
    [
     "worse"
    ]
   ],
   "name": "Aristotelian",
   "title": "A good life needs real goods, not deception",
   "why": "If a good life needs real friends and fortune, not just a good character, then a man whose friends secretly mocked him lacked something real. Aristotle even wondered whether events after death can affect how a life went.",
   "who": [
    "aristotle"
   ]
  },
  {
   "a": [
    "e4c",
    [
     "hedon"
    ]
   ],
   "b": [
    "l2a",
    [
     "depriv"
    ]
   ],
   "name": "",
   "title": "Pleasure is the good, so death robs you of it",
   "why": "If wellbeing is pleasure, death is bad exactly when it takes away pleasant years you would have had. Fred Feldman defends both hedonism and this deprivation account of death.",
   "who": [
    "feldman"
   ]
  },
  {
   "a": [
    "e4o",
    [
     "ritual"
    ]
   ],
   "b": [
    "a2",
    [
     "moral"
    ]
   ],
   "name": "Confucian",
   "title": "Ritual trains judgement, and art makes people better",
   "why": "If character is formed by rituals and examples, music and art are among its main tools. Xunzi and Confucius both treated music as a way of shaping people and binding a community.",
   "who": [
    "xunzi",
    "confucius"
   ]
  },
  {
   "a": [
    "e5e",
    [
     "quasi"
    ]
   ],
   "b": [
    "a1c",
    [
     "quasi"
    ]
   ],
   "name": "Quasi-realist",
   "title": "Feelings in morals and art, yet some are better",
   "why": "Expressivists say both moral and aesthetic judgements express attitudes rather than describe facts. A quasi-realist adds that attitudes can still be better or worse informed, and treats morals and taste the same way.",
   "who": []
  },
  {
   "a": [
    "e4c",
    [
     "nonwel"
    ]
   ],
   "b": [
    "a1",
    [
     "thing"
    ]
   ],
   "name": "Ideal utilitarian",
   "title": "Beauty is good in itself, and really in things",
   "why": "If beauty is good even when no one benefits from it, it must be a real feature of things, not just a pleasant feeling in us. G. E. Moore counted beauty among the intrinsic goods and argued a beautiful world would be better even with no one to see it.",
   "who": [
    "moore"
   ]
  },
  {
   "a": [
    "e4j",
    [
     "sentiment"
    ]
   ],
   "b": [
    "a3",
    [
     "moderate"
    ]
   ],
   "name": "Humean",
   "title": "Virtue is what we admire, and vice can spoil art",
   "why": "If moral judgement rests on what people naturally approve, a work asking us to approve of vice can fail on its own terms, because we cannot share its feelings. Hume made this point in “Of the Standard of Taste”.",
   "who": [
    "hume"
   ]
  },
  {
   "a": [
    "s10",
    [
     "nondom"
    ]
   ],
   "b": [
    "s8a",
    [
     "status"
    ]
   ],
   "name": "Republican",
   "title": "No one over you, so no one bows",
   "why": "If freedom means not living at another’s mercy, then justice requires that no one be so poor or so powerful that domination follows. Pettit and Anderson both join freedom as non-domination to equal standing.",
   "who": [
    "pettit",
    "anderson_e"
   ]
  },
  {
   "a": [
    "s3",
    [
     "protect",
     "epistemic"
    ]
   ],
   "b": [
    "s6",
    [
     "piecemeal"
    ]
   ],
   "name": "Open society",
   "title": "Democracy corrects mistakes, so reform step by step",
   "why": "If democracy’s value is that bad rulers and bad policies can be removed and better ones learned, reform should work the same way: small tested changes that can be undone. Popper and Dewey both treated democracy as society’s way of learning from mistakes.",
   "who": [
    "popper",
    "dewey"
   ]
  },
  {
   "a": [
    "s6",
    [
     "conserv"
    ]
   ],
   "b": [
    "s13",
    [
     "commun"
    ]
   ],
   "name": "Burkean conservative",
   "title": "Institutions carry wisdom, so law protects our ways",
   "why": "If long-standing institutions hold wisdom no one designed, a community’s traditions are worth protecting in law, not leaving to chance. Burke and Scruton defended both.",
   "who": [
    "burke",
    "scruton"
   ]
  },
  {
   "a": [
    "s7a",
    [
     "mandate"
    ]
   ],
   "b": [
    "s3b",
    [
     "heir"
    ]
   ],
   "name": "Divine right",
   "title": "Authority comes from God, so the rightful ruler is born",
   "why": "If rulers hold authority from God or Heaven, legitimacy doesn’t come from votes, and a hereditary monarch is the natural bearer. Filmer and Bossuet defended divine-right monarchy on just this basis.",
   "who": [
    "filmer",
    "bossuet",
    "de_maistre"
   ]
  },
  {
   "a": [
    "s7b",
    [
     "market"
    ]
   ],
   "b": [
    "s8",
    [
     "no"
    ]
   ],
   "name": "Anarcho-capitalist",
   "title": "Honest steps are fair, so markets replace the state",
   "why": "If whatever arises from honest work and trade is just, a state that taxes and redistributes is unjust, and markets can supply protection too. Rothbard and Huemer argue for both.",
   "who": [
    "rothbard",
    "huemer"
   ]
  },
  {
   "a": [
    "s7b",
    [
     "coop"
    ]
   ],
   "b": [
    "s8a",
    [
     "common"
    ]
   ],
   "name": "Social anarchist",
   "title": "No state, and the means of life held in common",
   "why": "If voluntary cooperation should replace the state, land and industry should belong to the communities that work them, not to private owners backed by state power. Kropotkin defended this anarcho-communism.",
   "who": [
    "kropotkin",
    "chomsky"
   ]
  },
  {
   "a": [
    "s12",
    [
     "nation"
    ]
   ],
   "b": [
    "s13",
    [
     "commun"
    ]
   ],
   "name": "Liberal nationalist",
   "title": "Nations are communities, so law may protect their culture",
   "why": "If a nation’s members share a history and culture that bind them like family, the law may protect that culture as part of who they are. David Miller and Scruton defend national loyalty and a protected common culture.",
   "who": [
    "david_miller",
    "scruton"
   ]
  },
  {
   "a": [
    "s12",
    [
     "cosmo"
    ]
   ],
   "b": [
    "s8a",
    [
     "diff"
    ]
   ],
   "name": "Global egalitarian",
   "title": "Borders change nothing, so gaps must help the world’s worst-off",
   "why": "If borders don’t change what we owe, Rawls’s principle that inequality must help the worst-off applies to the whole world, not just one country. Pogge and Beitz argued for global justice in this way.",
   "who": [
    "pogge"
   ]
  },
  {
   "a": [
    "s4",
    [
     "dignity"
    ]
   ],
   "b": [
    "s8a",
    [
     "status"
    ]
   ],
   "name": "",
   "title": "Equal standing matters, in wealth and in speech",
   "why": "If justice is about no one having to bow to anyone, then speech that brands a group as less than equal attacks exactly what justice protects. Waldron defends hate speech laws as protecting the equal standing of all citizens.",
   "who": [
    "waldron"
   ]
  },
  {
   "a": [
    "m5",
    [
     "nothing"
    ]
   ],
   "b": [
    "e4",
    [
     "results"
    ]
   ],
   "name": "Utilitarian compatibilist",
   "title": "Blame looks forward, and results decide what’s right",
   "why": "If only results make acts right, praise and blame are acts too, justified by what they do: shaping future behaviour. So you need no deep fact about desert. Schlick and J. J. C. Smart defended exactly this forward-looking view of responsibility.",
   "who": [
    "schlick",
    "smart"
   ]
  },
  {
   "a": [
    "m4",
    [
     "nofact"
    ]
   ],
   "b": [
    "e4a",
    [
     "everyone",
     "prior"
    ]
   ],
   "name": "Parfitian",
   "title": "No deep self, so no deep line between people",
   "why": "If there’s no further fact about whether a future person is you, the boundary between your life and others’ matters less. Parfit argued this undercuts self-interest and supports caring about everyone’s good, not just your own.",
   "who": [
    "parfit"
   ]
  },
  {
   "a": [
    "m2b",
    [
     "conv"
    ]
   ],
   "b": [
    "e3",
    [
     "equal"
    ]
   ],
   "name": "Buddhist",
   "title": "No self to favour, so all suffering counts",
   "why": "If “I” is only a convenient label, there’s no deep reason to rank my pain above anyone else’s, or a human’s above a pig’s. Buddhist ethics joins no-self with compassion for all sentient beings.",
   "who": [
    "buddha"
   ]
  },
  {
   "a": [
    "m1b",
    [
     "soul"
    ]
   ],
   "b": [
    "e3",
    [
     "none"
    ]
   ],
   "name": "Cartesian",
   "title": "Only souls feel, so animals don’t count",
   "why": "If thinking and feeling belong to a soul, and animals lack one, their behaviour is mechanism, and they have no welfare of their own to matter. Descartes notoriously treated animals as complex machines.",
   "who": [
    "descartes"
   ]
  },
  {
   "a": [
    "m3",
    [
     "libert"
    ]
   ],
   "b": [
    "e4e",
    [
     "deont"
    ]
   ],
   "name": "Kantian",
   "title": "Duty demands it, so you must be free",
   "why": "A duty of reason only makes sense if you could do what it demands whatever your desires and causes push you toward. Kant argued that the moral law itself shows we must think of ourselves as free in this strong sense.",
   "who": [
    "kant"
   ]
  },
  {
   "a": [
    "m2a",
    [
     "story"
    ]
   ],
   "b": [
    "e4",
    [
     "virtue"
    ]
   ],
   "name": "Narrative virtue",
   "title": "Your self is a story, and virtue shapes it",
   "why": "Virtues are traits shown across a whole life, and a whole life is held together as a story. MacIntyre argued that the self is a narrative unity and that virtues are what make such a life go well.",
   "who": [
    "macintyre"
   ]
  },
  {
   "a": [
    "e4d",
    [
     "flourish"
    ]
   ],
   "b": [
    "m3",
    [
     "libert"
    ]
   ],
   "name": "Objectivist",
   "title": "Free choice, and a life by your own judgment",
   "why": "If your good is living by your own judgment and achievements, you must really be the author of those judgments. Ayn Rand built her egoism on the claim that thinking is a free, volitional act.",
   "who": [
    "rand"
   ]
  },
  {
   "a": [
    "e4m",
    [
     "stoic"
    ]
   ],
   "b": [
    "m3",
    [
     "compat"
    ]
   ],
   "name": "Stoic",
   "title": "Fate rules outside you, freedom lives within",
   "why": "If only your character matters, it doesn’t matter that events are fixed: what’s yours is how you assent to them. The Stoics held that everything is fated, yet our judgments are still truly our own.",
   "who": [
    "zeno_citium",
    "epictetus"
   ]
  },
  {
   "a": [
    "m2a",
    [
     "story"
    ]
   ],
   "b": [
    "l2a",
    [
     "early"
    ]
   ],
   "name": "Narrative view of death",
   "title": "Life is a story, so death can cut it short",
   "why": "If you are the story linking your past, choices and plans, then what death can ruin is the story’s arc. That explains why an early death, before plans are fulfilled, seems the real tragedy.",
   "who": []
  },
  {
   "a": [
    "m1b",
    [
     "form"
    ]
   ],
   "b": [
    "l5",
    [
     "resur"
    ]
   ],
   "name": "Thomist",
   "title": "The soul shapes a body, so the body must return",
   "why": "If the soul is the form of a living body rather than a separate thing, a soul without its body is an incomplete human. Aquinas concluded that full survival needs the resurrection of the body.",
   "who": [
    "aquinas"
   ]
  },
  {
   "a": [
    "m2a",
    [
     "simple"
    ]
   ],
   "b": [
    "l5",
    [
     "soul"
    ]
   ],
   "name": "Simple soul",
   "title": "What has no parts can’t fall apart",
   "why": "Death destroys things by breaking them into parts. If the real you is simple, with no parts, death has nothing to break, so it is natural to think you outlast the body. Philosophers from Plato to Descartes used this line of thought.",
   "who": [
    "descartes",
    "avicenna"
   ]
  },
  {
   "a": [
    "m6",
    [
     "program"
    ]
   ],
   "b": [
    "l6",
    [
     "resist"
    ]
   ],
   "name": "Transhumanist",
   "title": "Minds are programs, so death can be beaten",
   "why": "If a mind is a pattern of information processing, it could in principle be preserved, repaired or moved to new hardware, so death looks like a technical problem. Nick Bostrom has argued that we should treat ageing and death as an enemy to defeat.",
   "who": [
    "bostrom"
   ]
  },
  {
   "a": [
    "m2b",
    [
     "conv"
    ]
   ],
   "b": [
    "k9f",
    [
     "nirvana"
    ]
   ],
   "name": "Buddhist",
   "title": "No lasting self, and real liberation",
   "why": "Suffering comes from clinging to a self that isn’t there, so seeing through it is the way out. The Buddha taught both: no self, and a real end to suffering.",
   "who": [
    "buddha",
    "vasubandhu",
    "nagarjuna"
   ]
  },
  {
   "a": [
    "m2a",
    [
     "witness"
    ]
   ],
   "b": [
    "k9f",
    [
     "absolute"
    ]
   ],
   "name": "Advaita Vedanta",
   "title": "Your awareness is the one reality",
   "why": "If your deepest self is pure, unchanging awareness, and the ultimate is one featureless reality, the two can be identified. Shankara taught that the self (atman) just is the ultimate (Brahman).",
   "who": [
    "shankara"
   ]
  },
  {
   "a": [
    "m1b",
    [
     "neutral"
    ]
   ],
   "b": [
    "k9a",
    [
     "pantheism"
    ]
   ],
   "name": "Spinozist",
   "title": "One substance, seen as mind and as matter",
   "why": "If there is only one reality, God or Nature, then mind and matter are two aspects of it rather than two kinds of stuff. Spinoza held both views together.",
   "who": [
    "spinoza"
   ]
  },
  {
   "a": [
    "m1b",
    [
     "panpsych"
    ]
   ],
   "b": [
    "k9k",
    [
     "limited"
    ]
   ],
   "name": "Process thought",
   "title": "Experience everywhere, and a God who persuades",
   "why": "If every bit of reality has its own glimmer of experience and freedom, God cannot simply override it, only lure it. Whitehead and Hartshorne combined this view with a God of limited power, which blunts the problem of suffering.",
   "who": [
    "whitehead",
    "hartshorne"
   ]
  },
  {
   "a": [
    "m3",
    [
     "libert"
    ]
   ],
   "b": [
    "k9a",
    [
     "open"
    ]
   ],
   "name": "Open theist",
   "title": "Open choices, so an open future even for God",
   "why": "If nothing settles your choice before you make it, there may be nothing yet for God to foreknow. Open theists like William Hasker accept this to keep libertarian free will.",
   "who": [
    "hasker",
    "pinnock",
    "swinburne"
   ]
  },
  {
   "a": [
    "m1a",
    [
     "elim"
    ]
   ],
   "b": [
    "k9b",
    [
     "debunk"
    ]
   ],
   "name": "Debunking naturalist",
   "title": "Inner glow and God, both tricks of the mind",
   "why": "Both views explain a powerful appearance by how human brains work, not by what is really there. Daniel Dennett gave this kind of explanation for consciousness and for religion.",
   "who": [
    "dennett"
   ]
  },
  {
   "a": [
    "m3f",
    [
     "determ"
    ]
   ],
   "b": [
    "k8a",
    [
     "necessit"
    ]
   ],
   "name": "Hard determinist",
   "title": "Laws force every event, choices included",
   "why": "If laws of nature make effects happen, and choices are events, nothing you do could have gone otherwise. Spinoza and d’Holbach drew this conclusion from a necessitarian view of nature.",
   "who": [
    "spinoza",
    "holbach"
   ]
  },
  {
   "a": [
    "m3b",
    [
     "agent"
    ]
   ],
   "b": [
    "k8a",
    [
     "powers",
     "primitive"
    ]
   ],
   "name": "Agent causation",
   "title": "Real causal powers, and you have them",
   "why": "If causing is a real power, not just a pattern, then a person can have it too and exercise it directly. Thomas Reid argued that our very idea of causal power comes from our own active power as agents.",
   "who": [
    "reid",
    "chisholm"
   ]
  },
  {
   "a": [
    "m1b",
    [
     "soul"
    ]
   ],
   "b": [
    "k3",
    [
     "rational"
    ]
   ],
   "name": "Cartesian",
   "title": "Reason knows itself, so the mind is more than matter",
   "why": "Rationalists hold that the mind grasps truths on its own, without the senses, which fits a mind that is something beyond the body. Descartes reasoned from “I think” to a thinking soul distinct from body.",
   "who": [
    "descartes",
    "plato"
   ]
  },
  {
   "a": [
    "k12",
    [
     "organic"
    ]
   ],
   "b": [
    "m2a",
    [
     "person"
    ]
   ],
   "name": "Animalist",
   "title": "Only living things are wholes, and you are one",
   "why": "If the only composite objects are living organisms, then you, a living human being, are one of the few real wholes. Peter van Inwagen and Eric Olson combine these views.",
   "who": [
    "vaninwagen",
    "olson"
   ]
  },
  {
   "a": [
    "m2b",
    [
     "conv"
    ]
   ],
   "b": [
    "k12",
    [
     "nihil"
    ]
   ],
   "name": "Abhidharma Buddhist",
   "title": "No chariot and no self, only parts",
   "why": "The Buddhist chariot argument says “chariot” is just a name for wheels, axle and frame arranged together. The same reasoning says “self” is a name for passing physical and mental events. Vasubandhu’s school treated both wholes as conventional.",
   "who": [
    "buddha",
    "vasubandhu"
   ]
  },
  {
   "a": [
    "m2b",
    [
     "bundle"
    ]
   ],
   "b": [
    "k8b",
    [
     "regular",
     "project"
    ]
   ],
   "name": "Humean",
   "title": "No necessary links, in the world or the self",
   "why": "Hume looked for a hidden connection behind cause and effect and found only one event following another. He looked inward for a self and found only a bundle of perceptions. The same empiricist test dissolves both.",
   "who": [
    "hume"
   ]
  },
  {
   "a": [
    "m1a",
    [
     "folk"
    ]
   ],
   "b": [
    "k1",
    [
     "true"
    ]
   ],
   "name": "Eliminative materialist",
   "title": "Science tells the truth, even about our minds",
   "why": "If science’s best theories describe what is really there, then brain science could show that everyday talk of beliefs and desires is a false theory. Paul Churchland’s eliminativism rests on this scientific realism.",
   "who": [
    "churchland"
   ]
  },
  {
   "a": [
    "k13",
    [
     "cohere"
    ]
   ],
   "b": [
    "m1b",
    [
     "idealism"
    ]
   ],
   "name": "Absolute idealist",
   "title": "Reality is experience, and truth is coherence",
   "why": "If the world is made of experience rather than stuff outside all minds, truth cannot be matching an outside world, so it must be how experience hangs together. F. H. Bradley and the British idealists held both.",
   "who": [
    "bradley"
   ]
  },
  {
   "a": [
    "m1a",
    [
     "function"
    ]
   ],
   "b": [
    "m6",
    [
     "program"
    ]
   ],
   "name": "Functionalist",
   "title": "Pain is a role, so a computer could play it",
   "why": "If a mental state is defined by what it does, not what it’s made of, then anything that does the same job, chips included, has the same mind. Putnam’s functionalism was the basis of strong AI.",
   "who": [
    "putnam",
    "dennett"
   ]
  },
  {
   "a": [
    "m1a",
    [
     "function",
     "elim"
    ]
   ],
   "b": [
    "m1d",
    [
     "incoherent"
    ]
   ],
   "name": "",
   "title": "Doing it all just is feeling, so zombies are impossible",
   "why": "If a mind is nothing more than what the brain does, a perfect physical duplicate does all of it, so there’s nothing left for it to lack. Daniel Dennett argues that the zombie story only seems coherent.",
   "who": [
    "dennett"
   ]
  },
  {
   "a": [
    "m3c",
    [
     "hier"
    ]
   ],
   "b": [
    "m5",
    [
     "own"
    ]
   ],
   "name": "Frankfurtian",
   "title": "Freedom is endorsing your desires, whatever their origin",
   "why": "If freedom is acting on desires you approve of, then what matters is your present stance toward them, not how you came to have them. Harry Frankfurt held both views.",
   "who": [
    "frankfurt"
   ]
  },
  {
   "a": [
    "m3c",
    [
     "reasons"
    ]
   ],
   "b": [
    "m3e",
    [
     "yes"
    ]
   ],
   "name": "Semi-compatibilist",
   "title": "Responsibility needs reasons, not alternatives",
   "why": "If what makes a choice yours is that it responds to reasons, then an idle device that never acts changes nothing about how you chose. John Martin Fischer combines reasons-responsiveness with this reading of Frankfurt’s case.",
   "who": [
    "fischer"
   ]
  },
  {
   "a": [
    "m3",
    [
     "libert"
    ]
   ],
   "b": [
    "m3e",
    [
     "dilemma"
    ]
   ],
   "name": "Libertarian",
   "title": "An open choice can’t be predicted in advance",
   "why": "If nothing before the choice settles it, no device could reliably tell which way you were about to go, so the story collapses. Libertarians like Robert Kane and David Widerker answer Frankfurt’s cases this way.",
   "who": [
    "kane",
    "widerker"
   ]
  },
  {
   "a": [
    "m3f",
    [
     "luck",
     "determ"
    ]
   ],
   "b": [
    "m3d",
    [
     "quarantine"
    ]
   ],
   "name": "Hard incompatibilist",
   "title": "No free will, so restrain only for safety",
   "why": "If no one deserves blame, harming offenders as payback is unjust, but protecting others is still allowed, as with quarantining a carrier of disease. Derk Pereboom and Gregg Caruso defend this model.",
   "who": [
    "pereboom",
    "caruso"
   ]
  },
  {
   "a": [
    "m1a",
    [
     "elim"
    ]
   ],
   "b": [
    "m2b",
    [
     "noself"
    ]
   ],
   "name": "Self-model theorist",
   "title": "The inner glow and the inner self are both pictures",
   "why": "If the brain misdescribes its own states as a private inner glow, it can just as easily draw a picture of a single “me”. Thomas Metzinger argues that no one ever had a self, only a self-model.",
   "who": [
    "metzinger"
   ]
  },
  {
   "a": [
    "k2a",
    [
     "indisp"
    ]
   ],
   "b": [
    "k1",
    [
     "true"
    ]
   ],
   "name": "Quine-Putnam",
   "title": "Science is true, and it needs numbers",
   "why": "If our best scientific theories are true, and they cannot be stated without numbers, we should believe in numbers just as we believe in electrons. This is the Quine-Putnam indispensability argument.",
   "who": [
    "quine",
    "putnam"
   ]
  },
  {
   "a": [
    "k2b",
    [
     "construct"
    ]
   ],
   "b": [
    "k3",
    [
     "kant"
    ]
   ],
   "name": "Intuitionist",
   "title": "Maths is built in thought, from the mind’s forms",
   "why": "If the mind contributes the structure of time to all experience, maths can be built step by step in that structure. Brouwer grounded intuitionist mathematics in this Kantian intuition of time.",
   "who": [
    "brouwer"
   ]
  },
  {
   "a": [
    "k2a",
    [
     "intuition"
    ]
   ],
   "b": [
    "k3",
    [
     "rational"
    ]
   ],
   "name": "Mathematical Platonist",
   "title": "Reason alone sees mathematical truths",
   "why": "If numbers exist outside space and time, the senses can’t reach them, so pure reason must. Plato and Kurt Gödel held that the mind perceives mathematical objects directly.",
   "who": [
    "godel",
    "plato"
   ]
  },
  {
   "a": [
    "k4a",
    [
     "abduct"
    ]
   ],
   "b": [
    "k1",
    [
     "true"
    ]
   ],
   "name": "Scientific realist",
   "title": "Best explanation wins, for hands and electrons",
   "why": "The same reasoning that says a real world best explains your experience says that real electrons best explain science’s success. Realists argue it would be a miracle if our theories worked so well while being false.",
   "who": []
  },
  {
   "a": [
    "k7",
    [
     "unreal"
    ]
   ],
   "b": [
    "k3",
    [
     "rational"
    ]
   ],
   "name": "Eleatic",
   "title": "Reason proves change is an illusion",
   "why": "If pure reasoning can tell us how reality must be, it can overrule the senses, which show change and passing time. Parmenides and Zeno argued that reason proves change impossible.",
   "who": [
    "parmenides",
    "zeno_elea"
   ]
  },
  {
   "a": [
    "k8b",
    [
     "none"
    ]
   ],
   "b": [
    "k1",
    [
     "true"
    ]
   ],
   "name": "Russellian",
   "title": "Physics is true, and it has no causes",
   "why": "If physics gives the true picture of the world, and its equations relate states without any “causing”, then cause is a leftover from everyday talk. Bertrand Russell made this argument.",
   "who": [
    "russell"
   ]
  },
  {
   "a": [
    "k2a",
    [
     "intuition"
    ]
   ],
   "b": [
    "e4u",
    [
     "intuition"
    ]
   ],
   "name": "Intuitionist",
   "title": "Reason sees maths and morals the same way",
   "why": "If the mind can directly see that 2 + 2 = 4, it can also directly see that promises matter. W. D. Ross compared basic moral duties to self-evident axioms of mathematics.",
   "who": [
    "ross"
   ]
  },
  {
   "a": [
    "k2b",
    [
     "fiction"
    ]
   ],
   "b": [
    "e5d",
    [
     "fiction"
    ]
   ],
   "name": "Fictionalist",
   "title": "Numbers and morals, both useful stories",
   "why": "Both views say a whole way of talking is false yet worth keeping, the way we talk about Sherlock Holmes. Hartry Field defended this about maths, and Richard Joyce about morality.",
   "who": [
    "field",
    "joyce"
   ]
  },
  {
   "a": [
    "k8b",
    [
     "project"
    ]
   ],
   "b": [
    "e5a",
    [
     "noncog"
    ]
   ],
   "name": "Projectivist",
   "title": "Causes and morals, both added by the mind",
   "why": "Hume said the mind spreads itself on the world: it adds the necessity we see in causes and the wrongness we see in cruelty. Simon Blackburn developed this projectivism for both.",
   "who": [
    "hume",
    "blackburn"
   ]
  },
  {
   "a": [
    "e4u",
    [
     "equilibrium"
    ]
   ],
   "b": [
    "k13",
    [
     "cohere"
    ]
   ],
   "name": "Coherentist",
   "title": "Truth and moral knowledge, both about fit",
   "why": "If truth is about beliefs fitting into one system, testing principles against cases until they fit is just how moral knowledge should work. Rawls’s reflective equilibrium is a coherence method.",
   "who": [
    "rawls"
   ]
  },
  {
   "a": [
    "k4",
    [
     "pointless"
    ]
   ],
   "b": [
    "e5a",
    [
     "noncog"
    ]
   ],
   "name": "Logical positivist",
   "title": "No test, no fact, so morals express feelings",
   "why": "If a claim no observation could test says nothing factual, then “torture is wrong” states no fact, so it must express a feeling. A. J. Ayer drew emotivism straight from this verification test.",
   "who": [
    "ayer",
    "carnap"
   ]
  },
  {
   "a": [
    "k8a",
    [
     "powers"
    ]
   ],
   "b": [
    "e4j",
    [
     "eudaim"
    ]
   ],
   "name": "Aristotelian",
   "title": "Natures with real powers, and virtue as flourishing",
   "why": "If things have real natures and powers, then humans have a nature too, and its healthy exercise is flourishing. Aristotle grounded virtue in what helps a human being live well by nature.",
   "who": [
    "aristotle"
   ]
  },
  {
   "a": [
    "k13",
    [
     "pragma"
    ]
   ],
   "b": [
    "e5b",
    [
     "natural"
    ]
   ],
   "name": "Pragmatist naturalist",
   "title": "What works is true, in science and ethics",
   "why": "If truth is what keeps working under inquiry, moral claims can be tested like any others, by how they work out in human life. John Dewey treated ethics as an experimental, natural inquiry.",
   "who": [
    "dewey"
   ]
  },
  {
   "a": [
    "k13",
    [
     "pragma"
    ]
   ],
   "b": [
    "s3",
    [
     "epistemic"
    ]
   ],
   "name": "Deweyan democrat",
   "title": "Truth is tested in practice, and democracy tests best",
   "why": "If truth is what holds up under ongoing inquiry, a democracy where many people try ideas and report results works like a scientific community. John Dewey defended democracy as shared inquiry.",
   "who": [
    "dewey"
   ]
  },
  {
   "a": [
    "k4a",
    [
     "fallib"
    ]
   ],
   "b": [
    "s4",
    [
     "harm"
    ]
   ],
   "name": "Millian",
   "title": "We know without certainty, so let opinions be heard",
   "why": "Knowledge never comes with a guarantee, so silencing an opinion assumes we can’t be wrong. Mill argued that free discussion is how fallible people correct their errors.",
   "who": [
    "mill"
   ]
  },
  {
   "a": [
    "s6",
    [
     "conserv"
    ]
   ],
   "b": [
    "k4b",
    [
     "natural"
    ]
   ],
   "name": "Humean conservative",
   "title": "Custom guides belief, and custom guides politics",
   "why": "If what keeps us believing is habit, not proof, then reason alone is a poor guide in politics too, and long-standing customs deserve trust. Hume was sceptical about reason and conservative about institutions.",
   "who": [
    "hume"
   ]
  },
  {
   "a": [
    "k8a",
    [
     "powers"
    ]
   ],
   "b": [
    "k9h",
    [
     "cosmo"
    ]
   ],
   "name": "Thomist",
   "title": "Real causes, so a first cause",
   "why": "If causes really produce their effects, a chain of producing causes needs something that produces without being produced. Aquinas built his first-cause argument on Aristotle’s real causal powers.",
   "who": [
    "aquinas",
    "aristotle"
   ]
  },
  {
   "a": [
    "k3",
    [
     "kant"
    ]
   ],
   "b": [
    "k9d",
    [
     "moral"
    ]
   ],
   "name": "Kantian",
   "title": "Knowledge stops at experience, so God is a moral postulate",
   "why": "If knowledge is limited to what experience can fill in, reason can’t prove God. Kant held that morality still requires us to believe in God, so he “denied knowledge to make room for faith”.",
   "who": [
    "kant"
   ]
  },
  {
   "a": [
    "k2",
    [
     "yes"
    ]
   ],
   "b": [
    "k9a",
    [
     "theism"
    ]
   ],
   "name": "Augustinian",
   "title": "Eternal numbers, thoughts in God’s mind",
   "why": "If numbers exist outside space and time, an eternal mind gives them a home. Augustine treated mathematical truths as ideas in God’s mind, and Plantinga has revived the idea.",
   "who": [
    "augustine",
    "plantinga"
   ]
  },
  {
   "a": [
    "k4a",
    [
     "abduct"
    ]
   ],
   "b": [
    "k9g",
    [
     "design"
    ]
   ],
   "name": "Inductive theist",
   "title": "Best explanation wins, and design explains best",
   "why": "If belief in a real world is justified because it best explains experience, the same reasoning can favour a designer as the best explanation of fine-tuning. Richard Swinburne argues for God this way.",
   "who": [
    "swinburne"
   ]
  },
  {
   "a": [
    "k7",
    [
     "yes"
    ]
   ],
   "b": [
    "k9a",
    [
     "theism"
    ]
   ],
   "name": "Boethian",
   "title": "All times are real, and God sees them all",
   "why": "If past, present and future all exist, God can see every moment at once from outside time, knowing your choice without causing it. Boethius used this picture to reconcile foreknowledge and freedom.",
   "who": [
    "boethius"
   ]
  },
  {
   "a": [
    "k4a",
    [
     "ideal"
    ]
   ],
   "b": [
    "k9a",
    [
     "theism"
    ]
   ],
   "name": "Berkeleyan",
   "title": "The world is experience, held in God’s mind",
   "why": "If things are only what minds experience, something must keep the world in existence when no person is looking. Berkeley said that is God, who perceives everything.",
   "who": [
    "berkeley"
   ]
  },
  {
   "a": [
    "k9",
    [
     "no"
    ]
   ],
   "b": [
    "e5b",
    [
     "natural"
    ]
   ],
   "name": "Secular moral realist",
   "title": "No God, yet morality is as real as health",
   "why": "If there is no God to ground right and wrong, the natural world is the only place left to find them, and facts about what helps or harms living things are part of that world. Sam Harris argues just this: morality is about the wellbeing of conscious creatures, so science can in principle study it, with no God required.",
   "who": [
    "harris"
   ]
  },
  {
   "a": [
    "k9",
    [
     "no"
    ]
   ],
   "b": [
    "e3",
    [
     "equal"
    ]
   ],
   "name": "Darwinian egalitarian",
   "title": "No God set humans apart, so pain is pain",
   "why": "The idea that human suffering matters far more than an animal’s was long backed by religion: only humans have souls or are made in God’s image. Drop God and that wall comes down. James Rachels argued that Darwin undermines the doctrine of human dignity, and Peter Singer likewise rejects the sanctity of human life alone in favour of equal concern for all who suffer.",
   "who": [
    "rachels",
    "singer"
   ]
  },
  {
   "a": [
    "e4q",
    [
     "nietzsche"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "name": "Nietzschean",
   "title": "God is dead, so we must create higher values",
   "why": "Nietzsche thought the death of God would bring down the morality built on it, leaving a choice between empty nihilism and the creation of new values. Ranking those new values as braver and more life-affirming is his answer to the gap atheism opens.",
   "who": [
    "nietzsche"
   ]
  },
  {
   "a": [
    "e4h",
    [
     "nature"
    ]
   ],
   "b": [
    "k9d",
    [
     "moral"
    ]
   ],
   "name": "Moral argument theist",
   "title": "Goodness flows from God, so morality points to God",
   "why": "If right and wrong are grounded in God’s own good nature, then taking morality seriously is already a reason to believe in God. Robert Adams grounds the good in God and treats this as an argument for God’s existence, and William Lane Craig’s moral argument uses the same structure.",
   "who": [
    "adams_rm",
    "craig"
   ]
  },
  {
   "a": [
    "e4h",
    [
     "command"
    ]
   ],
   "b": [
    "k9c",
    [
     "notmoral"
    ]
   ],
   "name": "Voluntarist",
   "title": "God’s will makes right, so God answers to no rule",
   "why": "If an act is right only because God commands it, then God is not bound by any standard outside himself, so asking why God permits suffering misjudges who sets the rules. Al-Ash’ari and William of Ockham both put God’s will above any independent moral law.",
   "who": [
    "ashari",
    "ockham"
   ]
  },
  {
   "a": [
    "k9b",
    [
     "debunk"
    ]
   ],
   "b": [
    "e5a",
    [
     "error"
    ]
   ],
   "name": "Debunking error theorist",
   "title": "Belief in God and belief in morality, both explained away",
   "why": "The same kind of argument does double work: if we can explain why people believe something without it being true, the belief loses its support. Richard Joyce argues that evolution explains our moral beliefs just as it may explain religious ones, and J. L. Mackie rejected both God and objective values.",
   "who": [
    "joyce",
    "mackie"
   ]
  },
  {
   "a": [
    "k9i",
    [
     "beyond"
    ]
   ],
   "b": [
    "e4t",
    [
     "yes"
    ]
   ],
   "name": "Kierkegaardian",
   "title": "Faith answers to no evidence, and God outranks ethics",
   "why": "If faith is a commitment that no evidence measures, then God’s command needn’t meet our ethical standards either. In Fear and Trembling, Kierkegaard calls Abraham the knight of faith precisely because he was willing to set ethics aside for God, a “teleological suspension of the ethical”.",
   "who": [
    "kierkegaard"
   ]
  },
  {
   "a": [
    "s3b",
    [
     "heir"
    ]
   ],
   "b": [
    "k9d",
    [
     "reveal"
    ]
   ],
   "name": "Divine right of kings",
   "title": "Scripture teaches it, and kings rule by God’s grant",
   "why": "If revelation is your guide, then the authority of a rightful ruler can come from the same source. Robert Filmer traced royal power back to Adam in Genesis, and Bossuet built his defence of absolute monarchy on “politics drawn from Holy Scripture”.",
   "who": [
    "filmer",
    "bossuet"
   ]
  },
  {
   "a": [
    "s13",
    [
     "neutral"
    ]
   ],
   "b": [
    "k9e",
    [
     "nobet"
    ]
   ],
   "name": "Lockean tolerationist",
   "title": "Belief can’t be forced, so the law shouldn’t try",
   "why": "If you can’t make yourself believe something because it pays, then no punishment can make anyone truly believe either, and law that takes sides on religion only produces hypocrites. This was John Locke’s central argument in A Letter Concerning Toleration.",
   "who": [
    "locke"
   ]
  },
  {
   "a": [
    "s13",
    [
     "relig"
    ]
   ],
   "b": [
    "k9j",
    [
     "exclusive"
    ]
   ],
   "name": "Religious state",
   "title": "One religion is true, so law should follow it",
   "why": "If one religion alone is true and leads to salvation, a state that stays neutral treats truth and error alike. Sayyid Qutb argued that only a society governed by God’s law, as revealed in Islam, is truly just.",
   "who": [
    "qutb"
   ]
  },
  {
   "a": [
    "s7b",
    [
     "indiv"
    ]
   ],
   "b": [
    "k9",
    [
     "no"
    ]
   ],
   "name": "Egoist anarchist",
   "title": "No God, and no master either",
   "why": "Rejecting a heavenly ruler and rejecting earthly ones are two sides of one refusal: no authority stands above the individual. Max Stirner called God, the state and morality alike “spooks”, ideas people bow to that have no real claim on them.",
   "who": [
    "stirner"
   ]
  },
  {
   "a": [
    "s7a",
    [
     "mandate"
    ]
   ],
   "b": [
    "k9",
    [
     "ultimate"
    ]
   ],
   "name": "Mandate of Heaven",
   "title": "A sacred moral order, and rulers answerable to it",
   "why": "In much Confucian thought, Heaven is less a person issuing orders than a sacred moral order behind the world, and a ruler holds power only while he serves it. Mencius taught that Heaven sees as the people see, so a ruler who abuses them loses his mandate.",
   "who": [
    "mencius"
   ]
  },
  {
   "a": [
    "k9j",
    [
     "allfalse"
    ]
   ],
   "b": [
    "l1a",
    [
     "worth"
    ]
   ],
   "name": "Secular humanist",
   "title": "No supernatural, but love and truth still matter",
   "why": "If religions’ supernatural claims are false, meaning has to come from what is worthwhile in this life: loving, helping, understanding, making. Philip Kitcher’s secular humanism keeps religion’s ethical wisdom while dropping its gods, and finds meaning in contributing to other lives.",
   "who": [
    "kitcher"
   ]
  },
  {
   "a": [
    "k9e",
    [
     "bet"
    ]
   ],
   "b": [
    "l6",
    [
     "hope"
    ]
   ],
   "name": "Pascalian",
   "title": "Bet on God, and live for what comes after",
   "why": "The wager only makes sense if what happens after death is at stake, so it naturally goes with living now in preparation for it. Pascal’s whole argument weighs a short earthly life against an infinite one to come.",
   "who": [
    "pascal"
   ]
  },
  {
   "a": [
    "k9f",
    [
     "nirvana"
    ]
   ],
   "b": [
    "l2b",
    [
     "noself"
    ]
   ],
   "name": "Buddhist",
   "title": "No creator, no lasting self, nothing for death to take",
   "why": "The Buddha taught that there is no permanent self, and that seeing this is the path to the end of suffering. Death then loses its sting: what seemed to be lost was never a lasting “me” to begin with.",
   "who": [
    "buddha"
   ]
  },
  {
   "a": [
    "k9c",
    [
     "redeem"
    ]
   ],
   "b": [
    "l5",
    [
     "resur"
    ]
   ],
   "name": "",
   "title": "Suffering will be made right in the life to come",
   "why": "Some suffering is so terrible that nothing in this life could make up for it, so its redemption needs a life beyond this one. Marilyn McCord Adams argued that God defeats even horrendous evils by drawing each sufferer into an endless, good relationship with God.",
   "who": [
    "adams_mm"
   ]
  },
  {
   "a": [
    "k9a",
    [
     "pantheism"
    ]
   ],
   "b": [
    "l6",
    [
     "life"
    ]
   ],
   "name": "Spinozist",
   "title": "God is nature, so think of life, not death",
   "why": "If God is simply nature, there is no judgement or afterlife to prepare for, and the wise person turns their mind to living well. Spinoza wrote that a free person thinks of nothing less than death, and their wisdom is a meditation on life.",
   "who": [
    "spinoza"
   ]
  },
  {
   "a": [
    "a1b",
    [
     "higher"
    ]
   ],
   "b": [
    "k9",
    [
     "yes",
     "ultimate"
    ]
   ],
   "name": "Platonist theist",
   "title": "Beauty is real because it reflects the divine",
   "why": "If beautiful things shine with a perfect Beauty beyond the world, there must be some sacred reality for them to reflect. Plotinus saw earthly beauty as a trace of the One, and Augustine saw the beauty of creatures as pointing back to God’s own beauty.",
   "who": [
    "plotinus",
    "augustine"
   ]
  },
  {
   "a": [
    "a6",
    [
     "unique"
    ]
   ],
   "b": [
    "k9d",
    [
     "experience"
    ]
   ],
   "name": "",
   "title": "Rapt in art, and touched by the sacred",
   "why": "If losing yourself in a work of art is a state all its own, it is easy to see it as kin to direct experience of the sacred, which is reported in similar terms. Abhinavagupta held that the savouring of an artwork’s emotion (rasa) takes you beyond your ordinary self and resembles the bliss of spiritual realisation.",
   "who": [
    "abhinavagupta"
   ]
  },
  {
   "a": [
    "a1",
    [
     "thing"
    ]
   ],
   "b": [
    "k9h",
    [
     "design"
    ]
   ],
   "name": "",
   "title": "Real beauty in nature points to a designer",
   "why": "If beauty is really in the world and not just in us, then a universe full of it needs explaining, and a designer who cares about beauty would explain it. Richard Swinburne counts the beauty of the world as part of the evidence for God.",
   "who": [
    "swinburne"
   ]
  },
  {
   "a": [
    "a1b",
    [
     "transient"
    ]
   ],
   "b": [
    "k9f",
    [
     "dao"
    ]
   ],
   "name": "Daoist aesthete",
   "title": "The Way is nameless, and beauty is imperfect",
   "why": "If all things follow a nameless Way that never stays fixed, beauty belongs with the uneven and the passing, not with completed perfection. Okakura Kakuzō’s Book of Tea traces the tea ceremony’s love of the imperfect back to Daoism and Zen.",
   "who": [
    "okakura"
   ]
  },
  {
   "a": [
    "a1b",
    [
     "transient"
    ]
   ],
   "b": [
    "l7",
    [
     "precious"
    ]
   ],
   "name": "",
   "title": "Beauty lies in passing, so mortality is a gift",
   "why": "If what fades is what moves us, then a life that never ended would lose its beauty too. Yoshida Kenkō wrote that if we lived forever, things would lose their power to move us: “the most precious thing in life is its uncertainty.”",
   "who": [
    "kenko"
   ]
  },
  {
   "a": [
    "a7",
    [
     "same"
    ]
   ],
   "b": [
    "l3",
    [
     "same"
    ]
   ],
   "name": "Experientialist",
   "title": "Only how things seem matters, in art and in life",
   "why": "These two answers run on the same principle: if something makes no difference to experience, it makes no difference to value. A perfect fake looks the same, so it’s just as good; a deceived life feels the same, so it went just as well.",
   "who": []
  },
  {
   "a": [
    "a7",
    [
     "achieve"
    ]
   ],
   "b": [
    "l3a",
    [
     "objlist"
    ]
   ],
   "name": "",
   "title": "Real achievement counts, in paintings and in lives",
   "why": "Both answers treat achievement as valuable in itself, not just for how it feels or looks. Denis Dutton argued that a forgery misrepresents what was achieved, and on objective list views, achievement is one of the things that makes a life go well whether or not you want it.",
   "who": [
    "dutton"
   ]
  },
  {
   "a": [
    "a9",
    [
     "ai"
    ]
   ],
   "b": [
    "m6",
    [
     "program"
    ]
   ],
   "name": "",
   "title": "Minds are programs, so an AI can be an artist",
   "why": "If a mind is a way of handling information, nothing stops a machine from being a creative agent with choices of its own. Simon Colton, who builds painting software, argues that machines can be genuinely creative and should be judged as artists.",
   "who": [
    "colton"
   ]
  },
  {
   "a": [
    "a6",
    [
     "unique"
    ]
   ],
   "b": [
    "m2a",
    [
     "witness"
    ]
   ],
   "name": "Schopenhauerian",
   "title": "Lost in art, you become pure awareness",
   "why": "Schopenhauer held that in aesthetic contemplation we stop willing and become a “pure, will-less subject of knowing”, a clear eye of the world. That fits a self whose deepest core is silent awareness, glimpsed when ordinary thinking and wanting fall away.",
   "who": [
    "schopenhauer"
   ]
  },
  {
   "a": [
    "a1b",
    [
     "transient"
    ]
   ],
   "b": [
    "m2b",
    [
     "conv"
    ]
   ],
   "name": "Buddhist aesthete",
   "title": "No lasting self, and beauty in what passes",
   "why": "Buddhism teaches that everything, the self included, is impermanent, and that clinging to it causes suffering. The Japanese aesthetics of mono no aware and wabi-sabi grew from this teaching, finding beauty in the very passing that the self tries to deny.",
   "who": []
  },
  {
   "a": [
    "a1a",
    [
     "kant"
    ]
   ],
   "b": [
    "k3",
    [
     "kant"
    ]
   ],
   "name": "Kantian",
   "title": "Shared mental structure, so taste can speak for all",
   "why": "If all human minds organise experience in the same built-in ways, then a feeling of beauty that comes from the free play of those shared powers can rightly expect everyone’s agreement. Kant’s Critique of Judgement grounds the universal claim of taste in exactly this common structure.",
   "who": [
    "kant"
   ]
  },
  {
   "a": [
    "a1b",
    [
     "higher"
    ]
   ],
   "b": [
    "k2",
    [
     "yes"
    ]
   ],
   "name": "Platonist",
   "title": "Numbers and Beauty both exist beyond the world",
   "why": "If perfect, unchanging objects like numbers exist outside space and time, a perfect Beauty can too, and beautiful things share in it. Plato’s theory of Forms covers both: the mathematician and the lover of beauty are both reaching for realities beyond the senses.",
   "who": [
    "plato"
   ]
  },
  {
   "a": [
    "a1",
    [
     "neither"
    ]
   ],
   "b": [
    "k4",
    [
     "pointless"
    ]
   ],
   "name": "Logical positivist",
   "title": "No test, no fact: for dreams and for beauty",
   "why": "If a claim that no experience could check says nothing real, then “that sunset is beautiful”, which no test confirms, can’t be stating a fact. A. J. Ayer applied this test and concluded that aesthetic words, like moral ones, simply express feeling.",
   "who": [
    "ayer"
   ]
  },
  {
   "a": [
    "a8",
    [
     "industry"
    ]
   ],
   "b": [
    "s6",
    [
     "radical"
    ]
   ],
   "name": "Frankfurt School",
   "title": "Mass culture soothes us, so the system must go",
   "why": "If pop music is standardised to keep people comfortable, then culture is helping an unjust system reproduce itself, and patching that system won’t help. Theodor Adorno and Max Horkheimer’s critique of the “culture industry” was part of their radical critique of capitalist society.",
   "who": [
    "adorno",
    "horkheimer"
   ]
  },
  {
   "a": [
    "a2",
    [
     "moral"
    ]
   ],
   "b": [
    "s13",
    [
     "perfect"
    ]
   ],
   "name": "Confucian",
   "title": "Art shapes character, and the state should foster it",
   "why": "If great art is what makes people better, a state that cares about how lives go has good reason to cultivate it. Confucius saw music and ritual as central to forming good character and good government, and Plato’s Republic gave the arts a role in education for the same reason.",
   "who": [
    "confucius",
    "plato"
   ]
  },
  {
   "a": [
    "a3",
    [
     "moralism"
    ]
   ],
   "b": [
    "s13",
    [
     "commun"
    ]
   ],
   "name": "",
   "title": "Corrupting art harms a people’s shared way of life",
   "why": "If art’s purpose is moral, art that corrupts doesn’t only fail as art: it damages the customs that make a community what it is. Rousseau opposed founding a theatre in Geneva for exactly this reason, fearing it would erode the city’s simple republican ways.",
   "who": [
    "rousseau"
   ]
  },
  {
   "a": [
    "a8",
    [
     "higher"
    ]
   ],
   "b": [
    "s13",
    [
     "commun"
    ]
   ],
   "name": "Cultural conservative",
   "title": "High art is a community’s inheritance, worth protecting",
   "why": "If the greatest works reward a lifetime of attention, they are also among the most valuable things a culture passes down, and a community may protect that inheritance. Roger Scruton defended high culture as part of the shared way of life that conservatism exists to conserve.",
   "who": [
    "scruton"
   ]
  },
  {
   "a": [
    "l3a",
    [
     "objlist"
    ]
   ],
   "b": [
    "s10",
    [
     "means"
    ]
   ],
   "name": "Capabilities approach",
   "title": "Some goods are good for anyone, so freedom needs means",
   "why": "If friendship, knowledge and achievement really make lives go well, then freedom has to include the real ability to reach them, not just the absence of interference. Martha Nussbaum’s capabilities approach combines a list of central human goods with a demand that everyone have the actual means to pursue them.",
   "who": [
    "nussbaum"
   ]
  },
  {
   "a": [
    "l3a",
    [
     "desire"
    ]
   ],
   "b": [
    "s13",
    [
     "neutral"
    ]
   ],
   "name": "Political liberal",
   "title": "Your good is what you want, so law stays neutral",
   "why": "If a life goes well when it gets what the person, fully informed, truly wants, then the state has no better view of anyone’s good than they do. Rawls defined a person’s good as the life they would rationally choose, even counting blades of grass, and built a state that stays neutral among such choices.",
   "who": [
    "rawls"
   ]
  },
  {
   "a": [
    "l1a",
    [
     "subjective"
    ]
   ],
   "b": [
    "s5",
    [
     "never"
    ]
   ],
   "name": "",
   "title": "You make your meaning, so you run your life",
   "why": "If meaning comes only from what each person chooses to care about, no one else, including the state, can know better what your life is for. That gives a strong reason to let people run their own lives, even when they choose badly.",
   "who": []
  },
  {
   "a": [
    "k7",
    [
     "yes"
    ]
   ],
   "b": [
    "l6",
    [
     "calm"
    ]
   ],
   "name": "Eternalist consolation",
   "title": "All times are real, so death erases nothing",
   "why": "If past, present and future all exist alike, a life that has ended is not wiped out; it is simply located at other times. Einstein wrote to the family of his late friend Michele Besso that the distinction between past, present and future is “only a stubbornly persistent illusion”.",
   "who": [
    "einstein"
   ]
  },
  {
   "a": [
    "l2b",
    [
     "noself"
    ]
   ],
   "b": [
    "k12",
    [
     "nihil"
    ]
   ],
   "name": "Abhidharma Buddhist",
   "title": "No chairs, no self: only passing parts",
   "why": "The same reasoning dissolves both: a chair is just parts arranged chair-wise, and a self is just experiences arranged self-wise. Vasubandhu and other Buddhist philosophers argued that wholes are mere conventions, so there is no lasting self for death to destroy.",
   "who": [
    "vasubandhu"
   ]
  },
  {
   "a": [
    "k7",
    [
     "unreal"
    ]
   ],
   "b": [
    "l5",
    [
     "soul"
    ]
   ],
   "name": "",
   "title": "Time is unreal, so the self is not lost",
   "why": "If time itself is an illusion, death, which seems to be an event in time, cannot be the real end of a person. J. M. E. McTaggart, famous for arguing that time is unreal, also argued that selves are eternal and that we are immortal.",
   "who": [
    "mctaggart"
   ]
  },
  {
   "a": [
    "k9a",
    [
     "open"
    ]
   ],
   "b": [
    "k9c",
    [
     "freewill"
    ]
   ],
   "name": "Open theist",
   "title": "God takes risks, because freedom is real",
   "why": "If God doesn’t know in advance what we will freely choose, then creating free people really was a risk, and suffering is what happens when the risk goes badly. Open theists like William Hasker and Clark Pinnock see this as the best answer to the problem of evil.",
   "who": [
    "hasker",
    "pinnock"
   ]
  },
  {
   "a": [
    "k9d",
    [
     "experience"
    ]
   ],
   "b": [
    "k9l",
    [
     "perceive"
    ]
   ],
   "name": "",
   "title": "Experience grounds belief, because it’s real evidence",
   "why": "If religious experiences are like seeing and hearing, trustworthy unless shown otherwise, then belief based on them is reasonable. William Alston defended exactly this in Perceiving God, and Richard Swinburne’s “principle of credulity” makes the same point.",
   "who": [
    "alston",
    "swinburne"
   ]
  },
  {
   "a": [
    "k9j",
    [
     "plural"
    ]
   ],
   "b": [
    "k9f",
    [
     "mystery"
    ]
   ],
   "name": "Religious pluralist",
   "title": "The sacred is beyond words, so many paths reach it",
   "why": "If ultimate reality can’t be fully captured by any words or tradition, then the great religions can all be partial human responses to it. John Hick argued that “the Real” in itself lies beyond all our concepts, and the world’s faiths are different ways of experiencing it.",
   "who": [
    "hick"
   ]
  },
  {
   "a": [
    "k9k",
    [
     "limited"
    ]
   ],
   "b": [
    "k9a",
    [
     "panentheism"
    ]
   ],
   "name": "Process theist",
   "title": "God persuades rather than controls, and contains the world",
   "why": "If the world is part of God and God’s power works by persuasion rather than force, suffering no longer counts against God’s goodness. Alfred North Whitehead and Charles Hartshorne developed this “process” view of a God who shares in the world’s suffering.",
   "who": [
    "whitehead",
    "hartshorne"
   ]
  },
  {
   "a": [
    "k9a",
    [
     "deism"
    ]
   ],
   "b": [
    "k9h",
    [
     "design"
    ]
   ],
   "name": "Enlightenment deist",
   "title": "Nature’s order shows a maker, not a meddler",
   "why": "If what points to God is the order of nature, then the God it points to is a lawgiver who built the world well, not one who interrupts it with miracles. Thomas Paine and Voltaire both rested their belief in God on nature’s design while rejecting revelation.",
   "who": [
    "paine",
    "voltaire"
   ]
  },
  {
   "a": [
    "a1a",
    [
     "better"
    ]
   ],
   "b": [
    "a8",
    [
     "higher"
    ]
   ],
   "name": "Humean",
   "title": "Ideal critics agree, and deep works pass time’s test",
   "why": "If the best judges are those with practice and few biases, then the works such judges keep returning to across ages are the greatest. Hume’s “Of the Standard of Taste” points to Homer, still admired after two thousand years, as the mark of real merit.",
   "who": [
    "hume"
   ]
  },
  {
   "a": [
    "a4a",
    [
     "meaning"
    ]
   ],
   "b": [
    "a7",
    [
     "context"
    ]
   ],
   "name": "Dantoan",
   "title": "Art is about something, so look-alikes can differ",
   "why": "If what makes something art is a meaning that depends on art history, then two objects that look identical can be different works, or one art and one not. Arthur Danto built his theory around such indiscernibles, from Warhol’s Brillo Boxes to imagined identical paintings.",
   "who": [
    "danto"
   ]
  },
  {
   "a": [
    "a5",
    [
     "text"
    ]
   ],
   "b": [
    "a4",
    [
     "aesthetic"
    ]
   ],
   "name": "New Critic",
   "title": "The work stands on its own, made for experiencing",
   "why": "If an artwork is made to be experienced for its form, then what matters is what is there to experience, not what the maker privately intended. Monroe Beardsley defended an aesthetic definition of art, and with W. K. Wimsatt called appeals to private intention the “intentional fallacy”.",
   "who": [
    "beardsley",
    "wimsatt"
   ]
  },
  {
   "a": [
    "a6",
    [
     "none"
    ]
   ],
   "b": [
    "a4",
    [
     "artworld"
    ]
   ],
   "name": "Institutionalist",
   "title": "No special aesthetic state, so art is institutional",
   "why": "If there is no special aesthetic attitude or experience, art can’t be defined by it, and something social must make things art instead. George Dickie attacked the aesthetic attitude as a myth and then proposed the institutional theory of art.",
   "who": [
    "dickie"
   ]
  },
  {
   "a": [
    "a4",
    [
     "express"
    ]
   ],
   "b": [
    "a9",
    [
     "no"
    ]
   ],
   "name": "Expressionist",
   "title": "Art expresses feeling, so feelingless machines can’t make it",
   "why": "If art is how a maker works out and shows what they feel, then something with no feelings to work out can’t produce it. R. G. Collingwood defined art as the expression of emotion, and Ted Chiang has argued that AI can’t make art because art needs many choices made by someone with something to say.",
   "who": [
    "collingwood",
    "chiang"
   ]
  },
  {
   "a": [
    "l1a",
    [
     "hybrid"
    ]
   ],
   "b": [
    "l3a",
    [
     "hybrid"
    ]
   ],
   "name": "Hybrid theorist",
   "title": "Real good, truly wanted: for meaning and welfare alike",
   "why": "Both answers say the same thing in two places: what you care about matters, but only when it is truly worth caring about. Susan Wolf’s view that meaning arises when subjective attraction meets objective attractiveness is a close twin of hybrid theories of wellbeing.",
   "who": [
    "wolf"
   ]
  },
  {
   "a": [
    "l6",
    [
     "resist"
    ]
   ],
   "b": [
    "l7",
    [
     "yes"
    ]
   ],
   "name": "Transhumanist",
   "title": "Death is the enemy, so take endless life",
   "why": "If death is an evil to be defeated, then a treatment that ends ageing is a victory, not a temptation to refuse. Nick Bostrom’s “Fable of the Dragon-Tyrant” pictures ageing as a monster we have wrongly learned to accept.",
   "who": [
    "bostrom"
   ]
  },
  {
   "a": [
    "l2b",
    [
     "natural"
    ]
   ],
   "b": [
    "l6",
    [
     "remember"
    ]
   ],
   "name": "Stoic",
   "title": "Death is natural, so keep it daily in mind",
   "why": "If death is as natural as autumn, then remembering it every day is not morbid but a way of living in agreement with nature. Marcus Aurelius returns to this again and again in his Meditations.",
   "who": [
    "marcus_aurelius"
   ]
  },
  {
   "a": [
    "l1f",
    [
     "no"
    ]
   ],
   "b": [
    "l5",
    [
     "resur"
    ]
   ],
   "name": "",
   "title": "Meaning needs eternity, and eternity is coming",
   "why": "If life would be meaningless were everything wiped out in the end, then the hope of resurrection is what saves it. William Lane Craig argues that without God and immortality life is absurd, and that the Christian hope of being raised is what gives it lasting meaning.",
   "who": [
    "craig"
   ]
  },
  {
   "a": [
    "l7",
    [
     "bored"
    ]
   ],
   "b": [
    "l5",
    [
     "end"
    ]
   ],
   "name": "",
   "title": "Endless life would be empty, so death is fine",
   "why": "If an endless life would eventually run out of things that matter to you, then mortality is not a cruel loss but the shape a good life needs. Bernard Williams argued this in “The Makropulos Case”, while denying any life after death.",
   "who": [
    "williams"
   ]
  }
 ]
};
