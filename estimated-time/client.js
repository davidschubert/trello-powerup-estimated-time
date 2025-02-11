TrelloPowerUp.initialize({
    // Button in der Kartenansicht
    "card-buttons": function (t, options) {
        console.log("card-buttons wird aufgerufen.");
        return [
            {
                text: "⏱️ Estimated Time",
                condition: "always",
                callback: function (t) {
                    return t.popup({
                        title: "⏱️ Estimated Time",
                        url: "popup.html",
                        height: 150,
                    });
                },
            },
        ];
    },
    // Badge in der Kartenansicht
    "card-detail-badges": function (t, options) {
        console.log("card-detail-badges wird aufgerufen.");
        return t
            .get("card", "private", "estimatedTime")
            .then(function (estimatedTime) {
                if (!estimatedTime) {
                    console.log("Kein Estimated Time gesetzt.");
                    return [];
                }
                console.log("Estimated Time gefunden: " + estimatedTime);
                return [
                    {
                        title: "⏱️ Estimated Time",
                        text: estimatedTime + "h",
                        color: "blue",
                    },
                ];
            });
    },
});
