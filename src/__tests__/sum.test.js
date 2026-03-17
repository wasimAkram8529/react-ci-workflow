
import {describe, expect, test, vitest} from 'vitest'
import { sum } from '../sum';

describe("Sum function tests", () => {
  test("adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("adds a positive and negative number", () => {
    expect(sum(5, -2)).toBe(3);
  });

  test("adds two negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});

describe("Mock api call", () => {
  function fetchUserName(api, id) {
    return api.getUser(id).name;
  }

  test("fetchUserName returns name", () => {
    const mockApi = {
      getUser: vitest.fn().mockReturnValue({ name: "Wasim" })
    };
    console.log(mockApi)
    expect(fetchUserName(mockApi, 1)).toBe("Wasim");
    expect(mockApi.getUser).toHaveBeenCalledWith(1);
  });
})

describe("Null value", () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
})

describe("Numbers", ()=> {
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
})

describe("Mock return value fun test", () => {
  test("Mock return value", () => {
    const mockFn = vitest.fn().mockReturnValue(10)

    expect(mockFn("Hii")).toBe(10)
    expect(mockFn()).toBe(10)
    expect(mockFn("hello")).toBe(10)
    expect(mockFn("fixed value")).toBe(10)
  })

  test("Mock implementaion function  value", () => {
    const mockFn = vitest.fn().mockImplementation((x) => x * 2)

    expect(mockFn(2)).toBe(4)
    expect(mockFn(3)).toBe(6)
    expect(mockFn(4)).toBe(8)
    expect(mockFn(6)).toBe(12)
  })

  test("Mock Resolves promise fn", async () => {
    const mockFn = vitest.fn().mockResolvedValue("done")
    await expect(mockFn()).resolves.toBe("done")
  })

  test("Mock Resolves promise fn 2", async () => {
    const mockFn = vitest.fn().mockResolvedValue("done")
    const data = await mockFn();
    expect(data).toBe("done")
  })

  test("Mock Reject promise fn", async () => {
    const mockFn = vitest.fn().mockRejectedValue(new Error("Failed"));
    await expect(mockFn()).rejects.toThrow("Failed");
  })
})

