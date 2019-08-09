import key_mirror from 'key-mirror';


const StateMachine = key_mirror({

    NOT_STARTED : null,
    IN_PROGRESS : null,
    SUCCESS : null,
    FAIL : null,
})