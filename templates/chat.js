$(function() {
    const trigger = [
        ["hi", "hey", "hello", "good morning", "good afternoon"],
        ["how are you", "how is life", "how are things"],
        ["what are you doing", "what is going on", "what is up"],
        ["how old are you"],
        ["who are you", "are you human", "are you bot", "are you human or bot"],
        ["who created you", "who made you"],
        [
            "your name please",
            "your name",
            "may i know your name",
            "what is your name",
            "what call yourself"
        ],
        ["i love you"],
        ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
        ["bad", "bored", "tired"],
        ["help me", "tell me story", "tell me joke"],
        ["ah", "yes", "ok", "okay", "nice"],
        ["thanks", "thank you"],
        ["bye", "good bye", "goodbye", "see you later"],
        ["what should i eat today"],
        ["bro"],
        ["what", "why", "how", "where", "when"]
    ];

    // These are bot responses, paired in order with the above 'trigger' phrases

    const reply = [
        ["Hello!", "Hi!", "Hey!", "Hi there!"],
        [
            "Fine... how are you?",
            "Pretty well, how are you?",
            "Fantastic, how are you?"
        ],
        [
            "Nothing much",
            "About to go to sleep",
            "Can you guess?",
            "I don't know actually"
        ],
        ["I am infinite"],
        ["I am just a bot", "I am a bot. What are you?"],
        ["The one true God, JavaScript"],
        ["I am nameless", "I don't have a name"],
        ["I love you too", "Me too"],
        ["Have you ever felt bad?", "Glad to hear it"],
        ["Why?", "Why? You shouldn't!", "Try watching TV"],
        ["What about?", "Once upon a time..."],
        ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
        ["You're welcome"],
        ["Bye", "Goodbye", "See you later"],
        ["Sushi", "Pizza"],
        ["Bro!"],
        ["Yes?"]
    ];

    // This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

    const alternative = [
        "Same",
        "Go on...",
        "Bro...",
        "Try again",
        "I'm listening..."
    ];

    // Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

    function output(input) {
        console.log(input);
        let product;

        //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
        let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

        // For example 'tell me a story' becomes 'tell me story'
        // Or 'i feel happy' -> 'happy'
        text = text
            .replace(/ a /g, " ")
            .replace(/i feel /g, "")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "");

        // Searches for an exact match with the 'trigger' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
        if (compare(trigger, reply, text)) {
            product = compare(trigger, reply, text);
        } else if (text.match(/coronavirus/gi)) {
            product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
        } else {
            product = alternative[Math.floor(Math.random() * alternative.length)];
        }

        //update DOM
        console.log(product);
        return product;
    }

    function compare(triggerArray, replyArray, string) {
        let item;
        for (let x = 0; x < triggerArray.length; x++) {
            for (let y = 0; y < replyArray.length; y++) {
                if (triggerArray[x][y] == string) {
                    items = replyArray[x];
                    item = items[Math.floor(Math.random() * items.length)];
                }
            }
        }
        return item;
    }

    var INDEX = 0;
    $("#chat-submit").click(function(e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
        if (msg.trim() == '') {
            return false;
        }
        var bot = output(msg);
        generate_message(msg, 'self');
        setTimeout(function() {
            generate_message(bot, 'user');
        }, 1000)

    })

    function generate_message(msg, type) {
        INDEX++;
        var str = "";
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        // str += "          <span class=\"msg-avatar\">";
        // str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
        // str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        if (type == 'self') {
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }


    $(document).delegate(".chat-btn", "click", function() {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, 'self');
    })

    $("#chat-circle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

    $(".chat-box-toggle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

})