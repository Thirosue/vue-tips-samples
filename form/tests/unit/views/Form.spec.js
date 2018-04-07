import { shallow, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import Form from "@/views/Form";
import * as formModule from "@/store/form";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Form view", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        form: formModule
      }
    });
  });

  it("mount", () => {
    const wrapper = shallow(Form, { store, localVue });
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
