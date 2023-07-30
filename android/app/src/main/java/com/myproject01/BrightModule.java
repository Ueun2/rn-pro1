package com.myproject01;

import android.os.Bundle;
import android.view.WindowManager;

import androidx.annotation.Nullable;

import com.facebook.flipper.plugins.inspector.NodeDescriptor;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BrightModule extends ReactContextBaseJavaModule {
    BrightModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "BrightModule";
    }//toast.js 안에 모듀이름과 같아야함
    private WindowManager.LayoutParams params;
    private float origin;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_brightness);
        params = (WindowManager.LayoutParams) getWindow().getAttributes();
    }

    private NodeDescriptor<Object> getWindow() {
        return null;
    }

    @Override
    protected void onResume() {
        super.onResume();
        origin = params.screenBrightness;
        params.screenBrightness = 1.0f;
        getWindow().setAttributes(params);
    }

    @Override
    protected void onPause() {
        super.onPause();
        params.screenBrightness = origin;
        getWindow().setAttributes(params);

    }
}