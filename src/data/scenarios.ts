export interface Scenario {
  id: string;
  sportId: string;
  title: string;
  scenario: string;
  choices: string[];
  correct: string;
  explanation: string;
  coachingInsight: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tag: "Attack" | "Defense" | "Awareness" | "Teamwork" | "Tactics";
}

export const scenarios: Scenario[] = [
  // Basketball
  {
    id: "bb-1",
    sportId: "basketball",
    title: "The Open Teammate",
    scenario: "You are the point guard. A defender is closing in while your teammate is open near the three-point line.",
    choices: ["Shoot", "Pass", "Drive"],
    correct: "Pass",
    explanation: "Passing to the open teammate creates a higher probability scoring opportunity.",
    coachingInsight: "Good players do not force crowded shots when the defense is already collapsing.",
    difficulty: "Easy",
    tag: "Awareness"
  },
  {
    id: "bb-2",
    sportId: "basketball",
    title: "Fast Break Choice",
    scenario: "You're on a 2-on-1 fast break. The lone defender is staying back to protect the rim.",
    choices: ["Pull up for 3", "Drive for layup", "Wait for team"],
    correct: "Drive for layup",
    explanation: "A 2-on-1 should result in a high-percentage shot at the rim.",
    coachingInsight: "Attack the basket until the defender commits, then decide to finish or dish.",
    difficulty: "Easy",
    tag: "Attack"
  },
  {
    id: "bb-3",
    sportId: "basketball",
    title: "Defensive Stance",
    scenario: "Your opponent is a fast dribbler. They are at the top of the key looking to drive.",
    choices: ["Press tight", "Give space", "Double team"],
    correct: "Give space",
    explanation: "Giving a fast player space makes it harder for them to blow past you.",
    coachingInsight: "Containment is more important than a steal against a high-speed threat.",
    difficulty: "Medium",
    tag: "Defense"
  },
  {
    id: "bb-4",
    sportId: "basketball",
    title: "Last Shot",
    scenario: "Down by 1 point, 5 seconds left. You have the ball at mid-court.",
    choices: ["Half-court heave", "Drive to rim", "Pass to post"],
    correct: "Drive to rim",
    explanation: "Driving to the rim increases the chance of a high-percentage shot or a foul.",
    coachingInsight: "In clutch moments, pressure the rim to force the officials to make a call.",
    difficulty: "Medium",
    tag: "Tactics"
  },

  // Soccer
  {
    id: "sc-1",
    sportId: "soccer",
    title: "Wing Opportunity",
    scenario: "You are near the penalty box and two defenders are approaching while a winger is open on the flank.",
    choices: ["Shoot", "Pass", "Dribble"],
    correct: "Pass",
    explanation: "The open winger gives a better attacking angle and stretches the defense.",
    coachingInsight: "Use width to pull defenders apart before attacking centrally.",
    difficulty: "Easy",
    tag: "Attack"
  },
  {
    id: "sc-2",
    sportId: "soccer",
    title: "Goalkeeper Pressure",
    scenario: "You're a defender. An attacker is pressing you hard near your own goal line.",
    choices: ["Dribble past", "Clear it long", "Short pass to GK"],
    correct: "Clear it long",
    explanation: "Safety first in the defensive third. Dribbling or risky passes can lead to goals.",
    coachingInsight: "When in doubt, put the ball out or clear the danger zone.",
    difficulty: "Easy",
    tag: "Defense"
  },
  {
    id: "sc-3",
    sportId: "soccer",
    title: "Midfield Vision",
    scenario: "You have the ball in midfield. Your striker is making a run behind the high defensive line.",
    choices: ["Through ball", "Back pass", "Hold the ball"],
    correct: "Through ball",
    explanation: "A high line is vulnerable to balls played into the space behind them.",
    coachingInsight: "Timing the pass is key to beating the offside trap.",
    difficulty: "Medium",
    tag: "Awareness"
  },
  {
    id: "sc-4",
    sportId: "soccer",
    title: "Corner Kick Defense",
    scenario: "Opponent is taking a corner. You are marking the tallest player.",
    choices: ["Watch the ball", "Stay goal-side", "Zonal mark"],
    correct: "Stay goal-side",
    explanation: "Staying between your man and the goal prevents them from having a free header.",
    coachingInsight: "Physical positioning is 90% of set-piece defending.",
    difficulty: "Medium",
    tag: "Defense"
  },

  // Football
  {
    id: "fb-1",
    sportId: "football",
    title: "Blitz Pick-up",
    scenario: "You're the QB. You see a linebacker blitzing from your blind side.",
    choices: ["Deep bomb", "Hot route pass", "Take the sack"],
    correct: "Hot route pass",
    explanation: "A quick pass to a vacated area is the best counter to a blitz.",
    coachingInsight: "Identify the blitz pre-snap and have a 'hot' receiver ready.",
    difficulty: "Medium",
    tag: "Awareness"
  },
  {
    id: "fb-2",
    sportId: "football",
    title: "4th and Short",
    scenario: "4th and 1 on the opponent's 45-yard line. You're down by 3 in the 3rd quarter.",
    choices: ["Punt", "Field Goal", "QB Sneak"],
    correct: "QB Sneak",
    explanation: "A sneak is the highest percentage play for gaining a single yard.",
    coachingInsight: "Aggression on 4th down can shift momentum and keep the defense tired.",
    difficulty: "Easy",
    tag: "Tactics"
  },
  {
    id: "fb-3",
    sportId: "football",
    title: "Red Zone Choice",
    scenario: "3rd and Goal from the 5. The defense is playing tight man coverage.",
    choices: ["Fade route", "Slant route", "Run up middle"],
    correct: "Slant route",
    explanation: "A slant uses the receiver's body to shield the defender in tight coverage.",
    coachingInsight: "Quick timing routes are essential in the condensed red zone space.",
    difficulty: "Medium",
    tag: "Attack"
  },
  {
    id: "fb-4",
    sportId: "football",
    title: "Prevent Defense",
    scenario: "Up by 7, 10 seconds left. Opponent has the ball at their own 40.",
    choices: ["All-out blitz", "Deep zone", "Man-to-man"],
    correct: "Deep zone",
    explanation: "Preventing the 'Hail Mary' is the only priority here.",
    coachingInsight: "Keep everything in front of you and don't let anyone get behind.",
    difficulty: "Easy",
    tag: "Defense"
  },

  // Tennis
  {
    id: "tn-1",
    sportId: "tennis",
    title: "Approach Shot",
    scenario: "You hit a deep ball and your opponent hits a short, weak return.",
    choices: ["Stay back", "Approach net", "Drop shot"],
    correct: "Approach net",
    explanation: "A short ball is an invitation to take control of the point at the net.",
    coachingInsight: "Transitioning forward puts maximum pressure on a defensive opponent.",
    difficulty: "Easy",
    tag: "Attack"
  },
  {
    id: "tn-2",
    sportId: "tennis",
    title: "Break Point Serve",
    scenario: "You're serving on break point. Your opponent struggles with high backhands.",
    choices: ["Flat ace", "Kick serve to BH", "Underhand serve"],
    correct: "Kick serve to BH",
    explanation: "Targeting a known weakness with a high-percentage kick serve is the smartest play.",
    coachingInsight: "Consistency and strategy win more points than raw power.",
    difficulty: "Medium",
    tag: "Tactics"
  },
  {
    id: "tn-3",
    sportId: "tennis",
    title: "Lob or Pass?",
    scenario: "Your opponent is at the net and has you running wide to your forehand.",
    choices: ["Hard pass", "High lob", "Slice return"],
    correct: "High lob",
    explanation: "A lob gives you time to recover your court position while testing their overhead.",
    coachingInsight: "Defense is about buying time and resetting the point.",
    difficulty: "Medium",
    tag: "Defense"
  },
  {
    id: "tn-4",
    sportId: "tennis",
    title: "Second Serve",
    scenario: "You just missed your first serve. The score is 30-30.",
    choices: ["Second big flat", "Safe slice", "Kick serve"],
    correct: "Safe slice",
    explanation: "Avoiding a double fault is critical at 30-30.",
    coachingInsight: "A reliable second serve is the foundation of a strong service game.",
    difficulty: "Easy",
    tag: "Awareness"
  },

  // Baseball
  {
    id: "bs-1",
    sportId: "baseball",
    title: "Sacrifice Bunt",
    scenario: "Runner on 1st, no outs, tie game in the 8th. You're a good bunter.",
    choices: ["Swing away", "Bunt", "Take pitches"],
    correct: "Bunt",
    explanation: "Moving the runner to 2nd puts them in scoring position with one out.",
    coachingInsight: "Small ball wins tight games in the late innings.",
    difficulty: "Easy",
    tag: "Teamwork"
  },
  {
    id: "bs-2",
    sportId: "baseball",
    title: "Outfield Throw",
    scenario: "You're the RF. Single to right, runner on 1st trying for 3rd.",
    choices: ["Throw to 3rd", "Throw to 2nd", "Throw to home"],
    correct: "Throw to 2nd",
    explanation: "If the runner is definitely reaching 3rd, throwing to 2nd prevents the batter from advancing.",
    coachingInsight: "Don't allow the 'trail runner' to move up on a hopeless throw.",
    difficulty: "Medium",
    tag: "Defense"
  },
  {
    id: "bs-3",
    sportId: "baseball",
    title: "2-0 Count",
    scenario: "You're the batter. The count is 2 balls, 0 strikes. Pitcher is struggling.",
    choices: ["Swing hard", "Look for a strike", "Take the pitch"],
    correct: "Look for a strike",
    explanation: "You are in a 'hitter's count'. Only swing if it's exactly the pitch you want.",
    coachingInsight: "Patience forces the pitcher to come into your zone.",
    difficulty: "Easy",
    tag: "Tactics"
  },
  {
    id: "bs-4",
    sportId: "baseball",
    title: "Double Play Depth",
    scenario: "Runner on 1st, 1 out. You're the shortstop.",
    choices: ["Play deep", "Double play depth", "Guard the line"],
    correct: "Double play depth",
    explanation: "Moving closer to 2nd base allows for a quicker turn on a ground ball.",
    coachingInsight: "Positioning should always reflect the most likely defensive play.",
    difficulty: "Medium",
    tag: "Defense"
  },

  // Volleyball
  {
    id: "vb-1",
    sportId: "volleyball",
    title: "Free Ball Pass",
    scenario: "The opponent hits a high, easy 'free ball' over the net.",
    choices: ["Spike it", "Pass to setter", "Let it drop"],
    correct: "Pass to setter",
    explanation: "A perfect pass to the setter allows for a coordinated, powerful attack.",
    coachingInsight: "Turn easy defensive opportunities into high-quality offensive plays.",
    difficulty: "Easy",
    tag: "Teamwork"
  },
  {
    id: "vb-2",
    sportId: "volleyball",
    title: "Block or Dig?",
    scenario: "A powerful hitter is attacking from the outside. You're the front-row blocker.",
    choices: ["Jump to block", "Step back to dig", "Watch the ball"],
    correct: "Jump to block",
    explanation: "Blocking at the net is the first line of defense against a strong spike.",
    coachingInsight: "Timing your jump with the hitter's swing is crucial for a solid block.",
    difficulty: "Medium",
    tag: "Defense"
  },
  {
    id: "vb-3",
    sportId: "volleyball",
    title: "Setter's Choice",
    scenario: "You're the setter. The pass is perfect. You have three hitters ready.",
    choices: ["Dump over net", "Set the middle", "Set the outside"],
    correct: "Set the middle",
    explanation: "A middle attack is the fastest and hardest to block if the pass is on target.",
    coachingInsight: "Vary your sets to keep the opposing blockers guessing.",
    difficulty: "Medium",
    tag: "Attack"
  },
  {
    id: "vb-4",
    sportId: "volleyball",
    title: "Service Receive",
    scenario: "A hard serve is coming right between you and your teammate.",
    choices: ["Call 'Mine!'", "Wait for them", "Duck out of way"],
    correct: "Call 'Mine!'",
    explanation: "Communication prevents 'seam' aces where neither player takes the ball.",
    coachingInsight: "Clear, loud communication is the backbone of team defense.",
    difficulty: "Easy",
    tag: "Awareness"
  }
];
