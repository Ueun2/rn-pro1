package com.myproject01;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule {
    ToastModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "ToastModule";
    }
    @ReactMethod
    public void show(String message, double duration) {
        ReactApplicationContext context = getReactApplicationContext();
        Toast toast = Toast.makeText((Context) context, (CharSequence) message, (int) duration);
        toast.show();
    }
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("SHORT", Toast.LENGTH_SHORT);
        constants.put("LONG", Toast.LENGTH_LONG);
        return constants;
    }

}
