import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';   
import {
  bounce,
  flash,
  pulse,
  rubberBand,
  shake,
  swing,
  tada,
  wobble,
  jello,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeOut,
  fadeOutDown,
  fadeOutUp,
  fadeOutLeft,
  fadeOutRight,
  slideInDown,
  slideInUp,
  slideInLeft,
  slideInRight,
  slideOutDown,
  slideOutUp,
  slideOutLeft,
  slideOutRight,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  lightSpeedIn,
  lightSpeedOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  hinge,
  jackInTheBox,
  rollIn,
  rollOut,
  zoomIn,
  zoomInDown,
  zoomInUp,
  zoomInLeft,
  zoomInRight,
  zoomOut,
  zoomOutDown,
  zoomOutUp,
  zoomOutLeft,
  zoomOutRight
} from 'ng-animate';

    export const Bounce = trigger('bounce', [transition('* => *', useAnimation(bounce))])
    export const Flash = trigger('flash', [transition('* => *', useAnimation(flash))])
    export const Pulse = trigger('pulse', [transition('* => *', useAnimation(pulse))])
    export const RubberBand = trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))])
    export const Shake = trigger('shake', [transition('* => *', useAnimation(shake))])
    export const Swing = trigger('swing', [transition('* => *', useAnimation(swing))])
    export const Tada = trigger('tada', [transition('* => *', useAnimation(tada))])
    export const Wobble = trigger('wobble', [transition('* => *', useAnimation(wobble))])
    export const Jello = trigger('jello', [transition('* => *', useAnimation(jello))])

    // trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))]),
    // trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
    // trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    // trigger('bounceOut', [transition('* => *', useAnimation(bounceOut))]),
    // trigger('bounceOutRight', [
    //   transition('* => *', useAnimation(bounceOutRight))
    // ]),
    // trigger('bounceOutUp', [transition('* => *', useAnimation(bounceOutUp))]),

    export const FadeIn = trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
    export const FadeInDown=trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))])
    export const FadeInLeft=trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))])
    // trigger('fadeOut', [transition('* => *', useAnimation(fadeOut))]),
    // trigger('fadeOutUp', [transition('* => *', useAnimation(fadeOutUp))]),
    // trigger('fadeOutRight', [transition('* => *', useAnimation(fadeOutRight))]),

    // trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),
    // trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))]),
    // trigger('slideOutUp', [transition('* => *', useAnimation(slideOutUp))]),
    // trigger('slideOutRight', [
    //   transition('* => *', useAnimation(slideOutRight))
    // ]),

    // trigger('flip', [transition('* => *', useAnimation(flip))]),
    // trigger('flipInX', [transition('* => *', useAnimation(flipInX))]),
    export const FlipInY =trigger('flipInY', [transition('* => *', useAnimation(flipInY))])
    // trigger('flipOutX', [transition('* => *', useAnimation(flipOutX))]),
    // trigger('flipOutY', [transition('* => *', useAnimation(flipOutY))]),

    // trigger('lightSpeedIn', [transition('* => *', useAnimation(lightSpeedIn))]),
    // trigger('lightSpeedOut', [
    //   transition('* => *', useAnimation(lightSpeedOut))
    // ]),

    // trigger('rotateIn', [transition('* => *', useAnimation(rotateIn))]),
    // trigger('rotateInDownLeft', [
    //   transition('* => *', useAnimation(rotateInDownLeft))
    // ]),
    // trigger('rotateInUpRight', [
    //   transition('* => *', useAnimation(rotateInUpRight))
    // ]),
    // trigger('rotateOut', [transition('* => *', useAnimation(rotateOut))]),
    // trigger('rotateOutUpLeft', [
    //   transition('* => *', useAnimation(rotateOutUpLeft))
    // ]),
    // trigger('rotateOutDownRight', [
    //   transition('* => *', useAnimation(rotateOutDownRight))
    // ]),

    // trigger('hinge', [transition('* => *', useAnimation(hinge))]),
    // trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox))]),
    // trigger('rollIn', [transition('* => *', useAnimation(rollIn))]),
    // trigger('rollOut', [transition('* => *', useAnimation(rollOut))]),

    // trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
    // trigger('zoomInLeft', [transition('* => *', useAnimation(zoomInLeft))]),
    export const ZoomInDown =  trigger('zoomInDown', [transition('* => *', useAnimation(zoomInDown))])
    // trigger('zoomOut', [transition('* => *', useAnimation(zoomOut))]),
    // trigger('zoomOutUp', [transition('* => *', useAnimation(zoomOutUp))]),
    // trigger('zoomOutRight', [transition('* => *', useAnimation(zoomOutRight))])
  