// Utility functions
const getEstimatedTime = function(t) {
    return t.get("card", "private", "estimatedTime")
        .catch(function(error) {
            console.error("Error fetching estimated time:", error);
            return null;
        });
};

// Initialize the Power-Up
TrelloPowerUp.initialize({
    "card-buttons": function (t, options) {
        return [
            {
                icon: "https://trello-powerups.hawaii.studio/estimated-time/icon.png",
                text: "Estimated Time",
                callback: function (t) {
                    return t.popup({
                        title: "Estimated Time",
                        url: "popup.html",
                        height: 200,
                    });
                },
            },
        ];
    },
    "board-buttons": function (t, options) {
        return [
            {
                icon: "https://trello-powerups.hawaii.studio/estimated-time/icon.png",
                text: "Board Estimated Time",
                callback: function (t) {
                    // Calculate total estimated time for all cards on the board
                    return t.cards('all')
                        .then(function(cards) {
                            let promises = cards.map(function(card) {
                                return t.get(card.id, 'private', 'estimatedTime')
                                    .catch(function() { return 0; });
                            });
                            
                            return Promise.all(promises).then(function(times) {
                                let totalTime = times
                                    .filter(time => time !== null && !isNaN(parseFloat(time)))
                                    .reduce(function(total, time) {
                                        return total + parseFloat(time || 0);
                                    }, 0);
                                
                                alert("Total estimated time for all cards: " + totalTime.toFixed(1) + " hours");
                            });
                        })
                        .catch(function(error) {
                            console.error("Error calculating total time:", error);
                            alert("Error calculating total estimated time");
                        });
                },
            },
        ];
    },
    "card-detail-badges": function (t, options) {
        console.log("Loading card detail badges");
        return getEstimatedTime(t)
            .then(function (estimatedTime) {
                if (!estimatedTime) {
                    return [];
                }
                
                // Get actual hours spent (if available)
                return t.get("card", "private", "actualTime")
                    .catch(() => null)
                    .then(function(actualTime) {
                        let badges = [{
                            title: "⏱️ Estimated Time",
                            text: estimatedTime + "h",
                            color: "blue",
                        }];
                        
                        // If actual time is set, add it as a badge
                        if (actualTime) {
                            badges.push({
                                title: "⏰ Actual Time",
                                text: actualTime + "h",
                                color: actualTime > estimatedTime ? "red" : "green",
                            });
                        }
                        
                        return badges;
                    });
            });
    },
    "card-badges": function (t, options) {
        return getEstimatedTime(t)
            .then(function (estimatedTime) {
                if (!estimatedTime) {
                    return [];
                }
                return [
                    {
                        icon: "https://trello-powerups.hawaii.studio/estimated-time/icon.png",
                        text: estimatedTime + "h",
                        color: parseFloat(estimatedTime) > 4 ? "red" : (parseFloat(estimatedTime) > 2 ? "yellow" : "green"),
                    },
                ];
            });
    },
});
