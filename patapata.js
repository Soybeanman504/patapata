/*
    This .js file is made by Soybeanman(TwitterID : @Soybeanman504).
    The original source exists in https://github.com/Soybeanman504/patapata
*/

document.addEventListener('DOMContentLoaded', () => {

    Patapata.setAll();

});

class Patapata {

    static setAll() {

        var contents = document.getElementsByClassName('patapata');

        for (var n = 0; n < contents.length; n++) {

            Patapata.set(contents[n]);

        }

    }

    static set(parent) {

        if (parent.firstElementChild !== null) {
            return;
        }

        var text = parent.dataset.text;

        var childrensName = ['main', 'top', 'top', 'bottom', 'bottom'];

        for (var n = 0; n < childrensName.length; n++) {

            var child = document.createElement('div');
            var divText = document.createElement('div');
            var pText = document.createElement('p');

            pText.innerText = text;
            pText.style.fontSize = (parent.clientHeight * 0.8) + 'px';

            divText.className = 'patapata-text';
            divText.appendChild(pText);

            child.className = 'patapata-' + childrensName[n];
            child.appendChild(divText);
            parent.appendChild(child);

        }

        console.log(parent.clientHeight)

    }

    static change(parent, text = ' ', milliTime = 500, frequency = 5) {

        var originalText = parent.dataset.text;

        if (originalText === '') {
            return false;
        }

        if (text === '') {
            text = ' ';
        }

        var time = milliTime / 1000;
        var mainText = parent.getElementsByClassName('patapata-main')[0];
        var topText = parent.getElementsByClassName('patapata-top');
        var bottomText = parent.getElementsByClassName('patapata-bottom');

        if (text === null) {
            text = originalText;
        }

        parent.dataset.text = '';

        if (frequency > 1) {

            Patapata.setText(mainText, text);
            Patapata.setText(topText[0], originalText);
            Patapata.setText(topText[1], '');
            Patapata.setText(bottomText[0], '');
            Patapata.setText(bottomText[1], originalText);

            setTimeout(() => {
                Patapata.setText(topText[0], '');
                Patapata.setText(bottomText[1], '');
            }, (milliTime / frequency) / 2);

            setTimeout(() => {
                Patapata.setText(topText[1], text);
                Patapata.setText(bottomText[0], text);
            }, milliTime - (milliTime / frequency));

        } else {

            Patapata.setText(mainText, text);
            Patapata.setText(topText[0], originalText);
            Patapata.setText(topText[1], text);
            Patapata.setText(bottomText[0], text);
            Patapata.setText(bottomText[1], originalText);

        }

        topText[0].style.zIndex = '30';
        topText[0].style.animationName = 'patapata-smaller';
        topText[0].style.animationDuration = (time / frequency) + 's';
        topText[0].style.animationIterationCount = frequency;

        topText[1].style.zIndex = '20';

        bottomText[0].style.zIndex = '30';
        bottomText[0].style.animationName = 'patapata-bigger';
        bottomText[0].style.animationDuration = (time / frequency) + 's';
        bottomText[0].style.animationIterationCount = frequency;

        bottomText[1].style.zIndex = '20';

        parent.addEventListener('animationend', () => {

            topText[0].style.zIndex = '0';
            topText[0].style.animationName = '';
            topText[0].style.transform = '';

            topText[1].style.zIndex = '0';

            bottomText[0].style.zIndex = '0';
            bottomText[0].style.animationName = '';
            bottomText[0].style.transform = '';

            bottomText[1].style.zIndex = '0';

            parent.dataset.text = text;

        });

        return true;

    }

    static setText(element, text) {
        element.firstElementChild.firstElementChild.innerText = text;
    }

}