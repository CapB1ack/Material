import ModalDialModule from './modalDial'
import ModalDialController from './modalDial.controller';
import ModalDialComponent from './modalDial.component';
import ModalDialTemplate from './modalDial.html';

describe('ModalDial', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ModalDialModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ModalDialController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ModalDialTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ModalDialComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ModalDialTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ModalDialController);
      });
  });
});
