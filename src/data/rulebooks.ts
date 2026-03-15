export interface Rulebook {
  sportId: string;
  objective: string;
  scoring: string;
  roles: string[];
  keyRules: string[];
  beginnerMistake: string;
  strategyTip: string;
}

export const rulebooks: Rulebook[] = [
  {
    sportId: "basketball",
    objective: "Score more points than the opponent by shooting the ball through a hoop.",
    scoring: "2 points for inside the arc, 3 points for outside, 1 point for free throws.",
    roles: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"],
    keyRules: [
      "No traveling (moving without dribbling)",
      "Double dribble is prohibited",
      "5 fouls and you are disqualified",
      "24-second shot clock to attempt a basket"
    ],
    beginnerMistake: "Dribbling with both hands simultaneously or looking at the ball while dribbling.",
    strategyTip: "Keep the ball moving. A pass is faster than a player."
  },
  {
    sportId: "soccer",
    objective: "Score by getting the ball into the opponent's goal using any part of the body except hands/arms.",
    scoring: "1 point per goal.",
    roles: ["Striker", "Midfielder", "Defender", "Goalkeeper"],
    keyRules: [
      "No hands except for the goalkeeper in their box",
      "Offside rule prevents cherry-picking",
      "Fouls result in free kicks or penalties",
      "Throw-ins are used when the ball goes out of bounds"
    ],
    beginnerMistake: "Crowding the ball instead of maintaining spatial awareness and positioning.",
    strategyTip: "Pass into space, not just to feet. Use the width of the pitch."
  },
  {
    sportId: "football",
    objective: "Advance the ball down the field to score touchdowns or field goals.",
    scoring: "6 points for Touchdown, 3 for Field Goal, 2 for Safety, 1 or 2 for extra points.",
    roles: ["Quarterback", "Wide Receiver", "Running Back", "Lineman", "Linebacker"],
    keyRules: [
      "4 downs to gain 10 yards",
      "Forward pass must be behind the line of scrimmage",
      "Interceptions and fumbles result in turnovers",
      "Holding and pass interference are common penalties"
    ],
    beginnerMistake: "Focusing only on the ball rather than watching the movements of the defense.",
    strategyTip: "The safest high-impact option is often better than a risky deep throw."
  },
  {
    sportId: "tennis",
    objective: "Hit the ball over the net into the opponent's court so they cannot return it.",
    scoring: "Love, 15, 30, 40, Game. Must win by two points at Deuce.",
    roles: ["Server", "Receiver"],
    keyRules: [
      "Ball must land inside the lines",
      "Only one bounce allowed before hitting",
      "Server gets two chances (faults)",
      "Switch sides on odd-numbered games"
    ],
    beginnerMistake: "Standing too close to the baseline when receiving a deep shot.",
    strategyTip: "Control the center of the court to limit your opponent's angles."
  },
  {
    sportId: "baseball",
    objective: "Score more runs than the opponent by hitting a ball and running around four bases.",
    scoring: "1 run for every player who safely crosses home plate.",
    roles: ["Pitcher", "Catcher", "Batter", "Infielder", "Outfielder"],
    keyRules: [
      "3 strikes for an out, 4 balls for a walk",
      "3 outs per half-inning",
      "Force outs vs. tag outs",
      "Fly balls caught are automatic outs"
    ],
    beginnerMistake: "Swinging at pitches outside the strike zone or losing track of the number of outs.",
    strategyTip: "Know the situation before the pitch is thrown. Anticipate where to throw."
  },
  {
    sportId: "volleyball",
    objective: "Hit the ball over the net and ground it on the opponent's side.",
    scoring: "Rally scoring, usually to 25 points. Must win by two.",
    roles: ["Setter", "Outside Hitter", "Libero", "Middle Blocker"],
    keyRules: [
      "Maximum of 3 hits per side",
      "Players must rotate positions clockwise",
      "No touching the net during play",
      "Ball is 'in' if it touches any part of the line"
    ],
    beginnerMistake: "Not calling for the ball, leading to collisions or dropped points.",
    strategyTip: "The second hit should almost always go to the setter."
  },
  {
    sportId: "cricket",
    objective: "Score more runs than the opposing team while batting.",
    scoring: "Runs completed between wickets, 4 for boundary, 6 for clearing boundary.",
    roles: ["Batsman", "Bowler", "Wicketkeeper", "Fielder"],
    keyRules: [
      "Bowlers bowl 6 balls per 'over'",
      "10 wickets per innings",
      "LBW (Leg Before Wicket) is a common dismissal",
      "No-balls and wides result in extra runs"
    ],
    beginnerMistake: "Playing too many risky shots early in the innings before settling in.",
    strategyTip: "Build partnerships. Rotating the strike is as important as hitting boundaries."
  },
  {
    sportId: "golf",
    objective: "Complete a course of holes in the fewest number of strokes.",
    scoring: "Par is the expected score. Birdie (-1), Eagle (-2), Bogey (+1).",
    roles: ["Golfer", "Caddie"],
    keyRules: [
      "Play the ball as it lies",
      "Out of bounds results in penalty strokes",
      "Maximum of 14 clubs in the bag",
      "Repair ball marks on the green"
    ],
    beginnerMistake: "Trying to hit the ball as hard as possible instead of focusing on smooth tempo.",
    strategyTip: "Aim for the center of the green rather than chasing difficult pin placements."
  }
];
