import "reflect-metadata";
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsEmail,
  IsBoolean,
  IsEnum,
} from "class-validator";

export enum StatusEnum {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export class Partnera {
  id: string | undefined;

  @IsNotEmpty({ message: "Name is required." })
  @IsString({ message: "Name must be a string." })
  @MinLength(3, { message: "Name must be at least 3 characters long." })
  name: string | undefined;

  @IsNotEmpty({ message: "Contact name is required." })
  @IsString({ message: "Contact name must be a string." })
  contactName: string | undefined;

  @IsNotEmpty({ message: "Phone number is required." })
  @IsString({ message: "Phone number must be a string." })
  phone: string | undefined;

  @IsString({ message: "Office phone number must be a string." })
  officePhone: string | undefined;

  @IsString({ message: "Landline must be a string." })
  landLine: string | undefined;

  @IsNotEmpty({ message: "Email is required." })
  @IsEmail({}, { message: "Email must be a valid email address." })
  email: string | undefined;

  @IsNotEmpty({ message: "City is required." })
  @IsString({ message: "City must be a string." })
  city: string | undefined;

  @IsNotEmpty({ message: "State is required." })
  @IsString({ message: "State must be a string." })
  state: string | undefined;

  @IsNotEmpty({ message: "Country is required." })
  @IsString({ message: "Country must be a string." })
  country: string | undefined;

  @IsNotEmpty({ message: "ZIP code is required." })
  @IsString({ message: "ZIP code must be a string." })
  zip: string | undefined;

  @IsNotEmpty({ message: "Address is required." })
  @IsString({ message: "Address must be a string." })
  address: string | undefined;

  @IsString({ message: "Description must be a string." })
  description: string | undefined;

  @IsNotEmpty({ message: "Manufacturer status is required." })
  @IsBoolean({ message: "Manufacturer must be a boolean value." })
  manufacturer: boolean | undefined;

  @IsNotEmpty({ message: "Service provider status is required." })
  @IsBoolean({ message: "Service provider must be a boolean value." })
  serviceProvider: boolean | undefined;

  @IsNotEmpty({ message: "Status is required." })
  @IsEnum(StatusEnum, {
    message: "Status must be either 'ACTIVE' or 'INACTIVE'.",
  })
  status: StatusEnum | undefined;
}
