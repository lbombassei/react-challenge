import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormState } from "../actions/text-actions";
import { PeriodicForm } from "../reducers/text-reducer";

export default function FormNames() {
    const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<PeriodicForm>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(setFormState(data as PeriodicForm));
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_control_row">
            <div className="form_control_wrapper">
              <label>First Name</label>
              <input
                type="text"
                className="form_control"
                {...register("firstname")}
              />
            </div>

            <div className="form_control_wrapper">
              <label>Last Name</label>
              <input
                type="text"
                className="form_control"
                {...register("lastname")}
              />
            </div>
          </div>

          <div className="form_submit_container">
            <button type="submit" className="form_button">
              Breakify
            </button>
          </div>
        </form>
    )
};
