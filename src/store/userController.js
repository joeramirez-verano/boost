import { StateController } from './stateController';

export class UserController extends StateController {
    constructor() {
        super({
            name: '',
            role: 'user',
            lastAction: ''
        });
        this.bindMethods(this);
        this.autoSubscribeOnMethods(this);
    }

    setName = (name) => {
        this.updateState({ name });
    };

    setRole = (role) => {
        this.updateState({ role });
    };

}

export const userController = new UserController();