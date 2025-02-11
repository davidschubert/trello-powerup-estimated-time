const t = window.TrelloPowerUp.iframe();

TrelloPowerUp.initialize({
    "card-buttons": function (t, options) {
        return [
            {
                icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
                text: "Estimated Time",
                //condition: "always",
                callback: function (t) {
                    return t.card().then((card) => alert(`Hello world!`));
                    /*return t.popup({
                        title: "Estimated Time",
                        url: "popup.html",
                        height: 150,
                    });*/
                },
            },
        ];
    },
    "board-buttons": function (t, options) {
        return [
            {
                icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
                text: "Estimated Time",
                //condition: "always",
                callback: function (t) {
                    return t.board().then((board) => alert(`Hello world!`));
                    /*return t.popup({
                        title: "Estimated Time",
                        url: "popup.html",
                        height: 150,
                    });*/
                },
            },
        ];
    },
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
    "card-badges": function (t, options) {
        return [
            {
                icon: "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717",
                text: "3",
            },
        ];
    },
});
