"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { INVESTMENT_GOALS } from "@/lib/constants";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<SignUpFormData> = async (
    data: SignUpFormData
  ) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
        {/* Input */}
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 2 }}
        />

        <InputField
          name="email"
          label="Email"
          placeholder="contact@example.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email name is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Email address is required",
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />
        {/* Country */}
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />
        {/* Investment Goals */}
        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        {/* Risk Tolerance */}
        {/* <SelectField /> */}
        {/* Preferred Industry */}
        {/* <SelectField /> */}
        {/* Submit Button */}
        {/* FooterLink */}
        <FooterLink
          text="Already have an account?"
          linkText="Sign In"
          href="/sign-in"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
    </>
  );
};

export default SignUp;
