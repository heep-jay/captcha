import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ReCaptcha2Component } from "ngx-captcha";


@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  protected aFormGroup!: FormGroup;
  @ViewChild("captchaElem") captchaElem?: ReCaptcha2Component;
  @ViewChild("langInput") langInput?: ElementRef;

  captchaIsLoaded = false;
  captchaSuccess = false;
  captchaIsExpired = false;
  captchaResponse?: string;

  theme: "light" | "dark" = "light";
  size: "compact" | "normal" = "normal";
  lang = "en";
  type: "image" | "audio" = "image";

  siteKey: string = "6LeB9dEiAAAAAKcwwn8j4V0E1Y1HBpuOisEDoWms";
  toggle: boolean = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ["", Validators.required]
    });
  }
  handleSuccess(data: string) {


    alert("i did something");
    this.toggle = true;
    console.warn("yourdata:", data, this.toggle);
  }
  title = "CodeSandbox";
}

