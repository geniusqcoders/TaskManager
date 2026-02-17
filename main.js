body {
    background-color: rgb(31, 31, 31);
}

h1 {
    display: flex;
    justify-content: center;
    color: aliceblue;

    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 45px;

    margin-top: 70px;
}

.card {
    display: flex;
    justify-content: center;

    margin: 0 auto;

    width: 700px;
    height: 600px;
    background-color: #474646;
    border-radius: 16px;

}

.tasks {
    color: #ffffff;
    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;

    text-align: center;
}

.todo-item {
    display: flex;
    width: 650px;
    min-height: 30px;
    max-height: 50px;
    background-color: rgb(243, 243, 243);
    border-radius: 10px;
    margin-right: 40px;
    margin-top: 10px;
}

ul {
    list-style: none;
}

.manageCard {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 667px;
    height: 50px;

    margin: 20px auto;
    padding: 0 20px;

    background-color: #474646;
    border-radius: 16px;
    position: relative;
}


.plusTask,
.minusTask {
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}

.minusTask:hover {
    transition: 0.5s;
    border: aliceblue;
    outline: aliceblue;
    background: aliceblue;
    border-radius: 10px;
}

.plusTask:hover {
    transition: 0.5s;
    border: aliceblue;
    outline: aliceblue;
    background: aliceblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.plusTask:active {
    animation: click-animation 0.15s forwards;
}

.minusTask:active {
    animation: click-animation 0.15s forwards;
}

.ui-checkbox {
    margin-left: 8px;
    margin-top: 5px;
}

@keyframes click-animation {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.9);
    }

    100% {
        transform: scale(1);
    }
}


@keyframes addAnimate {
    0% {
        transform: scale(0.1);
        opacity: 0;
    }

    50% {
        transform: scale(0.7);
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.todo-item.add-animate {
    animation: addAnimate 0.25s ease-out forwards;
}

@keyframes removeAnimate {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(0.7);
        opacity: 0.5;
    }

    100% {
        transform: scale(0);
        opacity: 0;
    }
}

.todo-item.remove-animate {
    animation: removeAnimate 0.2s ease-in forwards;
}

.form {
    --width-of-input: 200px;
    --border-height: 1px;
    --border-before-color: rgba(221, 221, 221, 0.39);
    --border-after-color: #5891ff;
    --input-hovered-color: #4985e01f;
    position: relative;
    width: var(--width-of-input);
}

.input {
    color: #fff;
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
    border-bottom: var(--border-height) solid var(--border-before-color);

}

.input-border {
    position: absolute;
    background: var(--border-after-color);
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: 0.3s;
}

input:hover {
    background: var(--input-hovered-color);
}

input:focus {
    outline: none;
}

input:focus~.input-border {
    width: 100%;
}

.form {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.todo-item.completed .task_name {
    text-decoration: line-through;
    opacity: 0.4;
}

.task_name {
    font-family: "Bungee", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}   
